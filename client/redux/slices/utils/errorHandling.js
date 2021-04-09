const checkForError = (payload) => {
  let hasError = false
  let error = payload

  if (payload.status) {
    hasError = payload.status === 404 || payload.status === 401
  }

  if (payload.data) {
    error = payload.data.error
  }

  return {
    error,
    hasError,
  }
}

const getResponseOrThrow = (error) => {
  if (error.response) {
    return error.response
  }

  throw error
}

export { checkForError, getResponseOrThrow }
