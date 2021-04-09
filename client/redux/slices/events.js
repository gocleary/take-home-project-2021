import { createSlice } from '@reduxjs/toolkit'
import { getResponseOrThrow, checkForError } from 'redux/slices/utils/errorHandling'
import build from 'redux-object'

import API from 'services/api'
import entitySlice from 'redux/slices/entities'

const initialState = {
  meta: {
    isLoading: false,
    error: null,
    isNotFound: false,
    isUnauthorized: false,
  }
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setError(state, action) {
      state.meta.error = action.payload
    },

    isLoading(state, action) {
      state.meta.isLoading = action.payload
    },

    isUnauthorized(state, action) {
      state.meta.isUnauthorized = action.payload
    },
  },
})

//------------------------------------------------------------
// ASYNC ACTIONS
//------------------------------------------------------------

_.assign(eventSlice, {
  asyncActions: {
    fetch: eventId => async (dispatch) => {
      dispatch(eventSlice.actions.isLoading(true))

      try {
        const response = await API.events.fetch(eventId)

        dispatch(entitySlice.actions.add({ data: response.data }))
      } catch (e) {
        const { error } = checkForError(getResponseOrThrow(e))

        if (error.type === 'unauthorized') {
          dispatch(eventSlice.actions.isUnauthorized(true))
        }

        dispatch(eventSlice.actions.setError('Failed to fetch event'))
      } finally {
        dispatch(eventSlice.actions.isLoading(false))
      }
    },
  },
})

//------------------------------------------------------------
// SELECTORS
//------------------------------------------------------------
_.assign(eventSlice, {
  selectors: {
    getEventPageData: eventId => (state) => {
      const { meta } = state.events

      const event = build(state.entities, 'event', eventId)

      return { event, meta }
    },
  },
})

export default eventSlice
