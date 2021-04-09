import Axios from 'axios'
import searchURI from 'services/searchURI'

const generateCrudRoutes = (baseRoute, modelName, additionalOptions = {}) => ({
  fetchAll(opts) {
    const options = { page: 1, ...opts, ...additionalOptions }

    return Axios.get(searchURI(`${baseRoute}.json`, options))
  },

  fetch(id) {
    return Axios.get(`${baseRoute}/${id}.json`, additionalOptions)
  },

  create(model) {
    return Axios.post(`${baseRoute}.json`, { [modelName]: model }, additionalOptions)
  },

  update(model) {
    return Axios.patch(`${baseRoute}/${model.id}.json`, { [modelName]: model }, additionalOptions)
  },

  destroy(model) {
    return Axios.delete(`${baseRoute}/${model.id}.json`, additionalOptions)
  },
})

export default generateCrudRoutes
