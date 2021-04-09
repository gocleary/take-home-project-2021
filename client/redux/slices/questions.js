import { createSlice } from '@reduxjs/toolkit'
import build from 'redux-object'

import API from 'services/api'
import entitySlice from 'redux/slices/entities'

import { getResponseOrThrow, checkForError } from 'redux/slices/utils/errorHandling'

const initialState = {
  isQuestionFormVisible: false,
  meta: {
    error: null,
    isLoading: false,
    isNotFound: false,
    isSaving: false,
    isUnauthorized: false,
  },
}

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    isQuestionFormVisible(state, action) {
      state.isQuestionFormVisible = action.payload
    },

    isUnauthorized(state, action) {
      state.meta.isUnauthorized = action.payload
    },

    resetQuestionForm(state, action) {
      state.isQuestionFormVisible = false
      state.pendingQuestionContent = ''
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

    isNotFound(state, action) {
      state.meta.isNotFound = action.payload
    },

    setQueryParams(state, action) {
      state.meta.queryParams = action.payload
    },
  },
})

//------------------------------------------------------------
// ASYNC ACTIONS
//------------------------------------------------------------
const asyncActions = {
  fetchAll: (eventId) => async (dispatch) => {
    dispatch(questionSlice.actions.isLoading(true))

    try {
      const response = await API.questions.fetchAll({ eventId })
      dispatch(entitySlice.actions.add({ data: response.data }))
    } catch (e) {
      dispatch(questionSlice.actions.setError('Failed to fetch questions'))
    } finally {
      dispatch(questionSlice.actions.isLoading(false))
    }
  },

  fetch: (questionId, isLoading, mergeMethod = 'merge') => async (dispatch) => {
    dispatch(questionSlice.actions.isLoading(isLoading))

    try {
      const response = await API.questions.fetch(questionId)

      dispatch(entitySlice.actions.add({ data: response.data }))
    } catch (e) {
      const { error } = checkForError(getResponseOrThrow(e))

      if (error.type === 'unauthorized') {
        dispatch(questionSlice.actions.isUnauthorized(true))
        dispatch(questionSlice.actions.setError('Question is unauthorized'))
      } else {
        dispatch(questionSlice.actions.isNotFound(true))
        dispatch(questionSlice.actions.setError('Failed to fetch question'))
      }
    } finally {
      dispatch(questionSlice.actions.isLoading(false))
    }
  },
}

_.assign(questionSlice, { asyncActions })

//------------------------------------------------------------
// SELECTORS
//------------------------------------------------------------
_.assign(questionSlice, {
  selectors: {
    getQuestionPageData: questionId => (state) => {
      const { meta } = state.questions

      const question = build(state.entities, 'question', questionId)

      return { question, meta, ...state.questions }
    },

    getQuestionFormData: () => (state) => {
      const { isQuestionFormVisible, pendingQuestionContent, meta } = state.questions

      return { isQuestionFormVisible, pendingQuestionContent, meta }
    },

    getQuestionsByEvent: eventId => (state) => {
      const { meta } = state.questions
      const questionIds = Object.keys(state.entities.question || {})

      const questionsMapping = questionIds.map(id => build(state.entities, 'question', id))
      const questions = questionsMapping.filter(q => q.event?.id === eventId)

      return { questions, meta }
    },
  },
})

export default questionSlice
