import { fetchData } from '../api/fetchData';
import { setError, setResults, isLoading } from '../actions';

export const fetchResults = url => {
  return async dispatch => {
    try {
      const data = await fetchData(url);
      // const results = cleanResults(data);
      console.log(data);
      dispatch(setResults(data));
    } catch (error) {
      // dispatch(setError(error))
    }
  }
}