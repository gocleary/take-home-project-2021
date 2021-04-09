import { createSlice } from '@reduxjs/toolkit'
import build from 'redux-object'

import API from 'services/api'
import entitySlice from 'redux/slices/entities'

const answerSlice = createSlice({
  name: 'answers',
  initialState: {
    isAnswerFormVisible: false,
    pendingAnswerContent: '',
    newAnswerIds: [],
    currentQuestionId: null,
    meta: {
      isNotFound: false,
      isSaving: false,
      error: null,
      isLoading: false,
      isLoadingAnswers: false,
    },
  },
  reducers: {
    isAnswerFormVisible(state, action) {
      state.isAnswerFormVisible = action.payload
    },

    updatePendingAnswerContent(state, action) {
      state.pendingAnswerContent = action.payload
    },

    resetAnswerForm(state, action) {
      state.isAnswerFormVisible = false
      state.pendingAnswerContent = ''
    },

    pushNewAnswerId(state, action) {
      state.newAnswerIds.push(action.payload)
    },

    resetNewAnswerIds(state) {
      state.newAnswerIds = []
    },

    setCurrentQuestionId(state, action) {
      state.currentQuestionId = action.payload
    },

    isLoadingAnswers(state, action) {
      state.meta.isLoadingAnswers = action.payload
    },

    // This is where we want to expand our generic handling of errors from the Rails backend
    //   * Generic string error like 500's
    //   * Form based, return all fields that are populating a model.error and the standardized message per field, using this to create inline error messages
    setError(state, action) {
      state.meta.error = action.payload
    },

    // Example of a utility function probably going to be shared to rally an effort to refactor all loading patterns around
    // We can merge in these common, refactored, functions
    isLoading(state, action) {
      state.meta.isLoading = action.payload
    },
  },
})

//------------------------------------------------------------
// ASYNC ACTIONS
//------------------------------------------------------------

_.assign(answerSlice, {
  asyncActions: {
    createAnswer: (answerParams, question) => async (dispatch) => {
      dispatch(answerSlice.actions.isLoading(true))

      try {
        const response = await API.answers.create(answerParams)

        dispatch(
          entitySlice.actions.add({
            data: response.data,
            reverseRelationships: [{ entityId: question.id, entityType: 'question', relationshipName: 'answers' }],
          })
        )

        dispatch(answerSlice.actions.resetAnswerForm())
        dispatch(answerSlice.actions.pushNewAnswerId(response.data.data.id))
      } catch (e) {
        console.error(e)
      } finally {
        dispatch(answerSlice.actions.isLoading(false))
      }
    },

    // Reusing exiting question endponi to get its answer list
    fetchAnswers: questionId => async (dispatch) => {
      dispatch(answerSlice.actions.isLoadingAnswers(true))
      dispatch(answerSlice.actions.setCurrentQuestionId(questionId))

      try {
        const response = await API.questions.fetch(questionId)

        dispatch(entitySlice.actions.add({ data: response.data }))
      } catch (e) {
        dispatch(answerSlice.actions.setError('Failed to fetch question'))
      } finally {
        dispatch(answerSlice.actions.isLoadingAnswers(false))
      }
    },
  },
})

//------------------------------------------------------------
// SELECTORS
//------------------------------------------------------------
_.assign(answerSlice, {
  selectors: {
    getAnswerFormData: () => (state) => {
      const {
        pendingAnswerContent, isAnswerFormVisible, newAnswerIds, currentQuestionId, meta,
      } = state.answers
      return {
        pendingAnswerContent,
        isAnswerFormVisible,
        newAnswerIds,
        currentQuestionId,
        meta,
      }
    },
    // eslint-disable-next-line arrow-parens, arrow-body-style
    getAnswer: id => {
      return state => build(state.entities, 'answer', id)
    },
  },
})

export default answerSlice
