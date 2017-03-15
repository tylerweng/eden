import SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const login = user => dispatch => (
  SessionAPIUtil
    .login(user)
    .then(loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil
    .signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil
    .logout()
    .then(user => dispatch(receiveCurrentUser(null)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
