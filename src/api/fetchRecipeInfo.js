import { fetchData } from './fetchData';
import { cleanRecipes } from './cleanRecipes';

const fetchRecipeInfo = arr => {
  const recipes = arr.map(async recipe => {
    const { id } = recipe
    const meals = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return cleanRecipes(meals);
  })
  return recipes
}

export default fetchRecipeInfo;