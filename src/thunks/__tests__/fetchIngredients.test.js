import { fetchIngredients } from '../fetchIngredients';
import { fetchData } from '../../api/fetchData';
import { setIngredients, setError } from '../../actions';
import { cleanIngredients } from '../../api/cleanIngredients';

describe('fetchIngredients', () => {

  let mockUrl;
  let mockIngredients;
  let mockDispatch;
  let thunk;
  let mockCleanIngredients

  jest.mock('../../api/cleanIngredients')

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    mockIngredients = [{name: 'Avocados'}, {name: 'Mangoes'}];
    mockCleanIngredients = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockIngredients
        })
      });
    });
    thunk = fetchIngredients(mockUrl);
  });

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined)
  });
  
  it('should call clean ingredients if response is okay', async () => {
    await thunk(mockDispatch);
    expect(mockCleanIngredients).toHaveBeenCalledWith(mockIngredients);
  });

  it('should dispatch an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }));
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'));
  });
});