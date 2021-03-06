export const recipes = (state = [], action) => {
  switch(action.type) {
    case 'SET_RECIPES':
      return action.recipes
    case 'FILTER_RECIPES':
      return state.filter(recipe => {
        return recipe.category === action.input
      })
    default:
      return state
  }
}