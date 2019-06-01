import { fetchData } from '../api/fetchData';
import { setError, setResults, isLoading } from '../actions';
import { cleanResults } from '../api/cleanResults';

export const fetchResults = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const data = await fetchData(url);
      const results = cleanResults(data);
      dispatch(isLoading(false));
      dispatch(setResults(results));
    } catch (error) {
      dispatch(setError(error))
    }
  }
}