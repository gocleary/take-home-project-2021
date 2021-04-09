import { combineReducers } from 'redux'

import entitySlice from 'redux/slices/entities'
import answerSlice from 'redux/slices/answers'
import eventSlice from 'redux/slices/events'
import questionSlice from 'redux/slices/questions'

// Add the reducer for each module and feature here
const RootReducer = combineReducers({
  // page variables
  currentUser: (state = {}) => state,
  environment: (state = {}) => state,
  styles: (state = {}) => state,

  // Module reducers
  entities: entitySlice.reducer,
  answers: answerSlice.reducer,
  events: eventSlice.reducer,
  questions: questionSlice.reducer
})

export default RootReducer
