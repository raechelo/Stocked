export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    case 'ADD_FAVORITE':
      console.log(state, action)
      return [...state, action.fave]
    case 'DELETE_FAVORITE':
      return state.filter(fave => fave.id !== action.id)
    default:
      return state
  }
}