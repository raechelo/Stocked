export const recipes = (state = [], action) => {
  switch(action.type) {
    case 'SET_RECIPES':
      return action.recipes
    case 'TOGGLE_FAVORITE':
    return state.map(recipe => {
      return recipe.id === action.id ? {...recipe, favorite: !recipe.favorite} : recipe;
    })
    case 'FILTER_RECIPES':
      return state.filter(recipe => {
        return recipe.category === action.input
      })
    default:
      return state
  }
}