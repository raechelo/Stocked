import { cleanIngredients } from '../cleanIngredients';

describe('cleanIngredients', () => {

  let ingredients = { meals: [{strIngredient: 'Avocados', idIngredient: 1, info: 'delicious, healthy fats'}] };

  it('should return a clean version of ingredients with only the requested information', () => {
    const expected = [{name: 'Avocados', id: 1}];
    const result = cleanIngredients(ingredients);

    expect(result).toEqual(expected);
  });
});