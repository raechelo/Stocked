import * as actions from './index';

describe('actions', () => {

  it('should return a boolean value representing a type of IS_LOADING', () => {
    const expected = { type: 'IS_LOADING', isLoading: true};
    const result = actions.isLoading(true);

    expect(result).toEqual(expected);
  });

  it('should return an error message with a type of SET_ERROR', () => {
    const expected = { type: 'SET_ERROR', msg: 'Error!' };
    const result = actions.setError('Error!');

    expect(result).toEqual(expected);
  });

  it('should return recipes with a type of SET_RECIPES', () => {
    const recipes = [{title: 'Mac&Cheese'}]
    const expected = { type: 'SET_RECIPES', recipes };
    const result = actions.setRecipes(recipes);
    expect(result).toEqual(expected);
  });

  it(' should return a toggled favorite id with a type of TOGGLE_FAVORITE', () => {
    const recipe = {title: 'Mac&Cheese', id: 1, favorite: false}
    const { id } = recipe;
    const expected = { type: 'TOGGLE_FAVORITE', id };
    const result = actions.toggleFavorite(1)

    expect(result).toEqual(expected);
  });

  it('should return filtered recipes with a type of FILTER_RECIPES', () => {
    const input = 'Vietnamese';
    const expected = { type: 'FILTER_RECIPES', input };
    const result = actions.filterRecipes(input);

    expect(result).toEqual(expected);
  });

  it('should return ingredients with a type of SET_INGREDIENTS', () => {
    const ing = ['Avocados', 'Mangoes', 'Cilantro'];
    const expected = { type: 'SET_INGREDIENTS', ing };
    const result = actions.setIngredients(ing);

    expect(result).toEqual(expected);
  });

  it('should return results with a type of SET_RESULTS', () => {
    const results = [{name: 'Chilaquiles'}];
    const expected = { type: 'SET_RESULTS', results };
    const result = actions.setResults(results);

    expect(result).toEqual(expected);
  });
});