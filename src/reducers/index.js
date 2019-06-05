import { combineReducers } from 'redux';
import { recipes } from './recipeReducer';
import { isLoading } from './loadingReducer';
import { setError } from './errorReducer';
import { ingredients } from './ingredientsReducer';
import { results } from './resultsReducer';
import { favorites } from './favoriteReducer';

export const rootReducer = combineReducers({
  recipes,
  ingredients,
  results,
  favorites,
  isLoading,
  setError
})