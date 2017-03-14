import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

const SessionAPIUtil = {
  login: user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: user
    })
  ),
  signup: user => (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: user
    })
  ),
  logout: user => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  )
};

export default SessionAPIUtil;
