import { combineReducers } from 'redux';
import { recipes } from './recipeReducer';
import { isLoading } from './loadingReducer';
import { setError } from './errorReducer';

export const rootReducer = combineReducers({
  recipes,
  isLoading,
  setError
})