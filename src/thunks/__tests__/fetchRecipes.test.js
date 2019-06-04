import { fetchRecipes } from '../fetchRecipes';
import { cleanRecipes } from '../../api/cleanRecipes';
import { setRecipes, isLoading, setError } from '../../actions';
import { fetchData } from '../../api/fetchData';
import { mapDispatchToProps } from '../../Containers/Form/Form';

describe('fetchRecipes', () => {

  let mockRecipes;
  let mockUrl;
  let mockDispatch;
  let thunk;
  let mockFetchData
  let mockCleanRecipes;

  jest.mock('../../api/cleanRecipes')
  let mockMeals;
  let mockArray = [{title: 'Mango Salsa', id: 1}, {title: 'Bacon Pancakes', id: 2}, {title: 'Jalapeno Grilled Cheese', id: 3}]

  beforeEach(() => {
    mockCleanRecipes = jest.fn();
    mockUrl = 'someurl.com';
    mockDispatch = jest.fn();
    mockMeals = [ {strMeal: 'Mac & Cheese'} ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockMeals
        })
      });
    });
    thunk = fetchRecipes(mockUrl);
  });

  it('should call dispatch with isLoading if the response is okay', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should map across the array and fetchData for each item', async () => {
    mockArray.map(m => {
      mockFetchData = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          results: m
        })
      })
    })
    await mockFetchData(mockUrl)
    expect(mockFetchData).toHaveBeenCalled();
  });

  it('should call cleanRecipes', async () => {
    let fetchData = jest.fn().mockImplementation(() => Promise.resolve({
      results: mockMeals
    }));
    await fetchData(mockUrl);
    expect(mockCleanRecipes).toHaveBeenCalled();
  });

  it('should call setRecipes', async () => {
    mockArray.map(m => {
      mockFetchData = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          results: m
        })
      })
    })
    await mockFetchData(mockUrl);
    
    const mockState = {
      recipes: [{title: 'Mango Salsa', id: 1}, {title: 'Bacon Pancakes', id: 2}, {title: 'Jalapeno Grilled Cheese', id: 3}]
    };
    const actionToDipsatch = setRecipes(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setRecipes(mockState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDipsatch)
  })

  it('should dispatch an error if the response is not okay', async () => {
    mockArray.map(m => {
      mockFetchData = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: 'Something went wrong'
        })
      })
    })
    await mockFetchData(mockUrl);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });
});