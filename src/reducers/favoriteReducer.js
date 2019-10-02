export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    case 'ADD_FAVORITE':
      return [...state, action.fave]
    case 'DELETE_FAVORITE':
      return state.favorites.filter(fave => fave.idMeal !== action.id)
    default:
      return state
  }
}