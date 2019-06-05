import { favorites } from '../favoriteReducer';
import * as actions from '../../actions/';

describe('favorites', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should set favorites', () => {
    const expected = [{name: 'M&C'}, {name: 'Guac'}];
    const result = favorites([], actions.setFavorites([{name: 'M&C'}, {name: 'Guac'}]));
    expect(result).toEqual(expected)
  })

  it('should add favorites', () => {
    const expected = {title: 'mango salsa'}
    const result = favorites([], actions.addFavorite({title: 'mango salsa'}));
    expect(result).toEqual(expected)
  });

  it('should remove favorites', () => {
    const expected = [];
    const favorite = {title: 'Mango Salsa', id: 1}
    const result = actions.deleteFavorite(1);
    expect(result).toEqual(expected);
  });
});