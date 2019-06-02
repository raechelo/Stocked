import { fetchRecipes } from '../fetchRecipes';
import { cleanRecipes } from '../../api/cleanRecipes';
import { setRecipes, isLoading, setError } from '../../actions';

describe('fetchRecipes', () => {

  let mockRecipes;
  let mockUrl;
  let mockDispatch;
  let thunk;

  jest.mock('../../api/cleanRecipes')

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    mockRecipes = {meals: [ {strMeal: 'Mac & Cheese'} ]};
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockRecipes
        })
      });
    });
    thunk = fetchRecipes(mockUrl);
  });

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should call dispatch with isLoading if the response is okay', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(()=> {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      })
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });
});