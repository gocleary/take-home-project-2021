import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from 'redux/reducer'

const middlewares = [thunk]

const { logger } = require('redux-logger')
middlewares.push(logger)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = preloadedState => createStore(
  RootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares))
)

export default configureStore
