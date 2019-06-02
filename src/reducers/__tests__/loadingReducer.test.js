import { isLoading } from '../loadingReducer';
import * as actions from '../../actions/index';

describe('isLoading', () => {

  it('should return the initial state', () => {
    const expected = false;
    const result = isLoading(undefined, false)

    expect(result).toEqual(expected);
  });

  it('should return a truthy value in case of loading', () => {
    const expected = true;
    const result = isLoading(undefined, actions.isLoading(true));

    expect(result).toEqual(expected);
  });
});