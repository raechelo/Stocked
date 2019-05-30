export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const setError = msg => ({
  type: 'SET_ERROR',
  msg
})

export const setRecipes = recipes => ({
  type: 'SET_RECIPES',
  recipes
})

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const filterRecipes = input => ({
  type: 'FILTER_RECIPES',
  input
})