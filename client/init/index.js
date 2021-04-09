import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux/store'
import denormalizedJsonApiResponse from 'utils/denormalizedJsonApiResponse'
import _ from 'lodash'

import AppConnected from 'components/appConnected'
import ErrorBoundary from 'components/errorBoundaries'

import API from 'services/api'
import camelCaseKeys from 'utils/camelCaseKeys'

import { Styles } from 'components/appColorFunctions'

global._ = _

const csrfToken = document.querySelector('[name="csrf-token"]').content

API.init(csrfToken)

const root = document.getElementById('cleary-app-container')

const pageVariables = camelCaseKeys(JSON.parse(document.getElementById('page-variables').text))

const { currentUser, environment } = pageVariables

const styles = {
  variables: {},
  cssOverrides: '',
}

const denormalizedCurrentUser = currentUser && denormalizedJsonApiResponse({ data: currentUser }, 'user')

const store = configureStore({
  currentUser: denormalizedCurrentUser,
  environment,
  styles,
})

Styles.init(styles)

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppConnected />
    </ErrorBoundary>
  </Provider>,
  root
)
