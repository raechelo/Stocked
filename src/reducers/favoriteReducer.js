export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    case 'ADD_FAVORITE':
      return [...state, action.favorite]
    case 'DELETE_FAVORITE':
      return state.filter(fave => fave.id !== action.id)
    default:
      return state
  }
}