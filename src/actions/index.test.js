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
  })
});