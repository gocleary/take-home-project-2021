export const isLoading = (state, action) => {
  state.meta.isLoading = action.payload
}

export const isNotFound = (state, action) => {
  state.meta.isNotFound = action.payload
}

export const isSaving = (state, action) => {
  state.meta.isSaving = action.payload
}

export const setError = (state, action) => {
  state.meta.error = action.payload
}

export const defaultActions = {
  isLoading,
  isNotFound,
  isSaving,
  setError,
}

export const defaultMeta = {
  isNotFound: false,
  isSaving: false,
  error: null,
  isLoading: false,
}
