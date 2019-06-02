import { fetchData } from '../api/fetchData';
import { setError, setIngredients } from '../actions';
import { cleanIngredients } from '../api/cleanIngredients';

export const fetchIngredients = url => {
  return async dispatch => {
    try {
      const data = await fetchData(url);
      const ingredients = cleanIngredients(data);
      dispatch(setIngredients(ingredients));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}