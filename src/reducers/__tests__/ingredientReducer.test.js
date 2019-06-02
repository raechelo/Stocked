import { ingredients } from '../ingredientsReducer';
import * as actions from '../../actions';

describe('ingredients', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = ingredients(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the state with all ingredients', () => {
    const expected = [{name: 'Mango'}, {name: 'Pineapple'}];
    const result = ingredients(undefined, actions.setIngredients([{name: 'Mango'}, {name: 'Pineapple'}]));

    expect(result).toEqual(expected);
  });
}); 