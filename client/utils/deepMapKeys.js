import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isObject'
import mapKeys from 'lodash/mapKeys'
import mapValues from 'lodash/mapValues'

const deepMapKeys = (data, callback) => {
  if (isArray(data)) {
    return data.map(datum => deepMapKeys(datum, callback))
  }

  if (isPlainObject(data)) {
    return mapValues(mapKeys(data, callback), value => deepMapKeys(value, callback))
  }

  return data
}

export default deepMapKeys
