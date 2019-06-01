import { fetchData } from '../api/fetchData';
import { cleanRecipes } from '../api/cleanRecipes';

import { isLoading, setError, setRecipes } from '../actions'; 

export const fetchRecipes = arr => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      let meals
      const recipes = arr.map(async a => {
        const { id } = a
        meals = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(meals)
        cleanRecipes(meals)
        dispatch(setRecipes(meals))
      })
      dispatch(isLoading(false));
    } catch (error) {
      // dispatch(setError(error.message))
    }
  }
}