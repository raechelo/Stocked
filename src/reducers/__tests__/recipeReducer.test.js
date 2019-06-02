import { recipes } from '../recipeReducer';
import * as actions from '../../actions';

describe('recipes', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = recipes(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should set recipes into state', () => {
    const expected = [{name: 'M&C'}, {name: 'Guac'}];
    const result = recipes([], actions.setRecipes([{name: 'M&C'}, {name: 'Guac'}]));

    expect(result).toEqual(expected);
  })

  it('should toggle favorite attribute on a recipe', () => {
    const id = 1;
    const expected = [ { id, favorite: false } ];
    const result = recipes([ { id, favorite: true } ], actions.toggleFavorite(id));

    expect(result).toEqual(expected);
  });

  it('should filter recipes', () => {
    const input = 'Vietnamese';
    const expected = [{category: 'Vietnamese'}];
    const recipeList = [{category: 'American'}, {category: 'Vietnamese'}]
    const result = recipes(recipeList, actions.filterRecipes(input))

    expect(result).toEqual(expected);
  });
});