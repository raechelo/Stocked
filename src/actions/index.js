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

export const toggleFavorite = fave => ({
  type: 'TOGGLE_FAVORITE',
  fave
});

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  favorites
});

export const filterRecipes = input => ({
  type: 'FILTER_RECIPES',
  input
});

export const setIngredients = ing => ({
  type: 'SET_INGREDIENTS',
  ing
});