/* eslint camelcase: 0 */ // --> OFF
import Axios from 'axios'
import _ from 'lodash'

import camelCaseKeys from 'utils/camelCaseKeys'
import snakeCaseKeysObjectsOnly from 'utils/snakeCaseKeysObjectsOnly'
import generateCrudRoutes from 'services/generateCrudRoutes'

const API = {
  init(csrfToken) {
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    Axios.defaults.transformRequest = [snakeCaseKeysObjectsOnly, ...Axios.defaults.transformRequest]

    Axios.defaults.transformResponse = [...Axios.defaults.transformResponse, camelCaseKeys]
  },

  events: {
    fetch(id) {
      return Axios.get(`/api/events/${id}.json`)
    },
  },
  questions: _.merge(generateCrudRoutes('/api/questions', 'question'), {
    create(questionParams) {
      return Axios.post('/api/questions.json', questionParams)
    },
  }),
  answers: {
    fetchAll(questionId) {
      return Axios.get(`/api/questions/${questionId}/answers.json`)
    },

    create(answerParams) {
      return Axios.post(`/api/questions/${answerParams.questionId}/answers.json`, answerParams)
    },
  },

  users: {
    fetchAll(userIds) {
      const request = {
        params: { user_ids: userIds },
      }
      return Axios.get('/api/users.json', request)
    },
  },
}

export default API
