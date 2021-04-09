import snakeCaseKeys from 'utils/snakeCaseKeys'

// Only snake case keys if the object is a Object. Don't snakeCase  objects that are created
// using a different constructor e.g. a FormData object. SnakeCasing FormData or potentially
// other non basic objects can have unexpected behaviors (ie not work).
const snakeCaseKeysObjectsOnly = (data) => {
  if (data && data.constructor === Object) {
    return snakeCaseKeys(data)
  }

  return data
}

export default snakeCaseKeysObjectsOnly
