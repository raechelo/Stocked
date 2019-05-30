export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'is_LOADING':
      return action.isLoading
    default:
      return state
  }
}