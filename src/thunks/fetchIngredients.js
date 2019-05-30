import { fetchData } from '../api/fetchData';

import { setError, setIngredients } from '../actions';
import { cleanIngredients } from '../api/cleanIngredients';

export const fetchIngredients = url => {
  return async dispatch => {
    try {
      const data = await fetchData(url);
      console.log(data);
      const ingredients = cleanIngredients(data);
      console.log(ingredients)
      dispatch(setIngredients(ingredients));
    } catch (error) {
      // dispatch(setError(error))
    }
  }
}