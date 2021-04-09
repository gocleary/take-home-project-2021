import camelCase from 'lodash/camelCase'
import deepMapKeys from 'utils/deepMapKeys'

const camelCaseKeys = data => deepMapKeys(data, (value, key) => camelCase(key))

export default camelCaseKeys
