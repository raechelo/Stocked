import { fetchData } from '../api/fetchData';
import { cleanRecipes } from '../api/cleanRecipes';

import { isLoading, setError, setRecipes } from '../actions'; 

export const fetchRecipes = arr => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      let meals = []
      let recipes = arr.map(async a => {
        const { id } = a
        await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => meals.push(res.meals[0]))
      })
      // meals = cleanRecipes(meals)
      dispatch(isLoading(false));
      dispatch(setRecipes(meals))
      // return Promise.all(recipes);
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}