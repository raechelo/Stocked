import { fetchData } from '../api/fetchData';
import { setError, setResults, isLoading } from '../actions';
import { cleanResults } from '../api/cleanResults';
import { fetchRecipes } from './fetchRecipes';

export const fetchResults = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const data = await fetchData(url);
      let results = cleanResults(data);
      // dispatch(setResults(results));
      dispatch(fetchRecipes(results))
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}