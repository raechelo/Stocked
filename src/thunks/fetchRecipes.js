import { fetchData } from '../api/fetchData';

import { isLoading, setError, setRecipes } from '../actions'; 

export const fetchRecipes = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const recipes = await fetchData(url);
      // const recipes = cleanRecipes(data)
      console.log(recipes)
      dispatch(isLoading(false));
      dispatch(setRecipes(recipes))
    } catch (error) {
      // dispatch(setError(error.message))
    }
  }
}