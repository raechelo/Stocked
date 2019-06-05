import { fetchData } from '../api/fetchData';
import { isLoading, setError, setRecipes } from '../actions'; 

export const fetchRecipes = arr => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      let meals = []
      let recipes = await arr.map(async a => {
        const { id } = a
        await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => meals.push(res.meals[0]))
      })
      await dispatch(setRecipes(meals));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}