import { cleanRecipes } from '../cleanRecipes';

describe('cleanRecipes', () => {

  let recipes = { meals: [{strMeal: 'Mango Salsa', strCategory: 'Mexican', strArea: 'Mexico', strMealThumb: 'www.somelink.com', strSource: 'www.placeholder.com', strYoutube: 'www.yoututbe.come/stocked', strInstructions: 'Chop mangoes, avocados, tomatoes, and cilantro. Add all to bowl, add two tablespoons lime juice, one tablespoon olive oil. Chop habanero peppers and add to mix.', strIngredient1: 'mangoes', strIngredient2: 'avocados', strIngredient3: 'habanero peppers', strIngredient4: 'olive oil', strIngredient5: 'lime juice', strIngredient6: 'roma tomatoes', strIngredient7: 'cilantro', strMeasure1: '1 chopped', strMeasure2 :'1 chopped', strMeasure3: '1 chopped', strMeasure4: '1 tbsp', strMeasure5: '2 tbsp', strMeasure6: '2 chopped, remove fleshy insides', strMeasure7: 'handful chopped'}] };

  it('should clean recipes and return only the requested information', () => {
    let expected = [{name: 'Mango Salsa', category: 'Mexican', area: 'Mexico', image: 'www.somelink.com', link: 'www.placeholder.com', yt: 'www.yoututbe.come/stocked', instructions: 'Chop mangoes, avocados, tomatoes, and cilantro. Add all to bowl, add two tablespoons lime juice, one tablespoon olive oil. Chop habanero peppers and add to mix.', ingredient1: 'mangoes', ingredient2: 'avocados', ingredient3: 'habanero peppers', ingredient4: 'olive oil', ingredient5: 'lime juice', ingredient6: 'roma tomatoes', ingredient7: 'cilantro', measure1: '1 chopped', measure2 :'1 chopped', measure3: '1 chopped', measure4: '1 tbsp', measure5: '2 tbsp', measure6: '2 chopped, remove fleshy insides', measure7: 'handful chopped'}];
    let result = cleanRecipes(recipes);

    expect(result).toEqual(expected);
  })
})