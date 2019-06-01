export const recipes = (state = [], action) => {
  switch(action.type) {
    case 'SET_RECIPES':
      return action.recipes
    case 'TOGGLE_FAVORITE':
      return
    case 'FILTER_RECIPES':
      return
    default:
      return state
  }
}