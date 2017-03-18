import SearchAPIUtil from '../util/search_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_QUERY_RESULTS = 'RECEIVE_QUERY_RESULTS';

const receiveQueryResults = queryResults => ({
  type: RECEIVE_QUERY_RESULTS,
  queryResults
});

export const query = queryValue => dispatch => (
  SearchAPIUtil
    .query(queryValue)
    .then(queryResults => dispatch(receiveQueryResults(queryResults)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
