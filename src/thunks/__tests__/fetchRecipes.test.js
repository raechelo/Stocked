import { fetchRecipes } from '../fetchRecipes';
import { setRecipes, isLoading, setError } from '../../actions';
import { mapDispatchToProps } from '../../Containers/Form/Form';

describe('fetchRecipes', () => {

  let mockUrl;
  let mockDispatch;
  let thunk;
  let mockFetchData

  let mockMeals;
  let mockArray = [{title: 'Mango Salsa', id: 1}, {title: 'Bacon Pancakes', id: 2}, {title: 'Jalapeno Grilled Cheese', id: 3}]

  beforeEach(() => {
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

  it('should call setRecipes', async () => {
    await thunk(mockDispatch)

    const mockState = {
      recipes: [{title: 'Mango Salsa', id: 1}, {title: 'Bacon Pancakes', id: 2}, {title: 'Jalapeno Grilled Cheese', id: 3}]
    };

    const actionToDispatch = setRecipes(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setRecipes(mockState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should dispatch an error if the response is not okay', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          statusText: 'Something went wrong'
        })
      })
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });
});