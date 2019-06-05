export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    case 'ADD_FAVORTE':
      return [...state.favorites, action.favorite]
    case 'DELETE_FAVORTE':
      state.favorites.filter(fave => fave.id !== action.id)
    default:
      return state
  }
}