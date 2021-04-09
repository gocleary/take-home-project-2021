import normalize from 'json-api-normalizer'
import build from 'redux-object'

const denormalizedJsonApiResponse = (response, type) => {
  const entities = normalize(response.data)

  if (response.data.data instanceof Array) {
    const objIds = response.data.data.map(o => o.id)

    return objIds.map(id => build(entities, type, id))
  }

  return build(entities, type, response.data.data.id)
}

export default denormalizedJsonApiResponse
