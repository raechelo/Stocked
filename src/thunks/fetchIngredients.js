import { fetchData } from '../api/fetchData';

import { setError, setIngredients } from '../actions';

export const fetchIngredients = url => {
  return async dispatch => {
    try {
      const ingredients = await fetchData(url);
      console.log(ingredients);
      dispatch(setIngredients(ingredients))
    } catch (error) {
      // dispatch(setError(error))
    }
  }
}