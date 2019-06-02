import { results } from '../resultsReducer';
import * as actions from '../../actions';

describe('results', () => {

  it('should return the default state', () => {
    const expected = [];
    const result = results(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the state with all the results', () => {
    const expected = [{name: 'Avocados'}];
    const result = results([{name: 'Avocados'}], actions.setResults([{name: 'Avocados'}]));

    expect(result).toEqual(expected);
  });
});