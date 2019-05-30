import { combineReducers } from 'redux';
import { recipes } from './recipeReducer';
import { isLoading } from './loadingReducer';
import { setError } from './errorReducer';
import { ingredients } from './ingredientsReducer';

export const rootReducer = combineReducers({
  recipes,
  ingredients,
  isLoading,
  setError
})