import { fetchResults } from '../fetchResults';
import { isLoading, setError, setResults } from '../../actions';
import { fetchData } from '../../api/fetchData';
import { cleanResults } from '../../api/cleanResults';
import { fetchRecipes } from '../fetchRecipes';

jest.mock('../../api/cleanResults');
jest.mock('../fetchRecipes');

describe('fetchResults', () => {

  let thunk;
  let mockUrl;
  let mockDispatch;
  let mockResults;
  
  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    mockResults = {meals: [{strMeal: 'Nachos'}, {strMeal: 'tacos'}]}

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockResults
        })
      });
    });
    thunk = fetchResults(mockUrl);
  });

  it('should dispatch isLoading(true) if the response is okay', () => {
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  })

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should call cleanResults on the output of the fetch', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(cleanResults(mockResults))
  });

  it('should dispatch fetchRecipes if the response is okay', async () => {
    let data = await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchRecipes(data));
  });

  it('should dispatch isLoading(false) if the response is okay', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Error!'
      });
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error!'));
  });
});