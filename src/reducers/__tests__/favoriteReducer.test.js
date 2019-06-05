import { favorites } from '../favoriteReducer';
import * as actions from '../../actions/';

describe('favorites', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should add favorites', () => {
    const expected = {title: 'mango salsa'}
    const result = actions.addFavorite({title: 'mango salsa'});
    expect(result).toEqual(expected)
  });

  it('should remove favorites', () => {
    const expected = [];
    const favorite = {title: 'Mango Salsa', id: 1}
    const result = actions.deleteFavorite(1);
    expect(result).toEqual(expected);
  });
});