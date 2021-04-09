import snakeCase from 'lodash/snakeCase'
import deepMapKeys from 'utils/deepMapKeys'

const snakeCaseKeys = data => deepMapKeys(data, (value, key) => snakeCase(key))

export default snakeCaseKeys
