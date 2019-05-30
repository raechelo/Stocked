import { fetchData } from '../api/fetchData';

import { isLoading, setError } from '../actions;' 

export const fetchRecipes = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const data = fetchData(url);
      // const recipes = cleanRecipes(data)
      dispatch(isLoading(false));
      // dispatch(setResults(recipes))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}