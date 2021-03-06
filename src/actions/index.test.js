import * as actions from './index';

describe('actions', () => {

  it('should return a boolean value representing a type of IS_LOADING', () => {
    const expected = { type: 'IS_LOADING', isLoading: true};
    const result = actions.isLoading(true);

    expect(result).toEqual(expected);
  });

  it('should return an error message with a type of SET_ERROR', () => {
    const expected = { type: 'SET_ERROR', message: 'Error!' };
    const result = actions.setError('Error!');

    expect(result).toEqual(expected);
  });

  it('should add a new recipe to the favorites store', () => {
    const favorite = [{title: 'Pho'}];
    const expected = { type: 'ADD_FAVORITE', favorite};
    const result = actions.addFavorite([{title: 'Pho'}]);
    expect(result).toEqual(expected);
  });

  it('should set recipes with a type of SET_RECIPES', () => {
    const recipes = [{title: 'Pho'}];
    const expected = { type: 'SET_RECIPES', recipes};
    const result = actions.setRecipes(recipes);
    expect(result).toEqual(expected);
  });

  it(' should return a toggled favorite id with a type of DELETE_FAVORITE', () => {
    const recipe = {title: 'Mac&Cheese', id: 1, favorite: false}
    const { id } = recipe;
    const expected = { type: 'DELETE_FAVORITE', id };
    const result = actions.deleteFavorite(1)

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
});