import SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const login = user => dispatch => (
  SessionAPIUtil
    .login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil
    .signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil
    .logout()
    .then(user => dispatch(receiveCurrentUser(null)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
