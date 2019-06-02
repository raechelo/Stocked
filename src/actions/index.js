export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const setError = message => ({
  type: 'SET_ERROR',
  message
});

export const setRecipes = recipes => ({
  type: 'SET_RECIPES',
  recipes
});

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  id
});

export const filterRecipes = input => ({
  type: 'FILTER_RECIPES',
  input
});

export const setIngredients = ing => ({
  type: 'SET_INGREDIENTS',
  ing
});

export const setResults = results => ({
  type: 'SET_RESULTS',
  results
})