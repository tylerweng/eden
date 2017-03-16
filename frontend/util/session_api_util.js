const SessionAPIUtil = {
  login: user => (
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: user
    })
  ),
  signup: user => (
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: user
    })
  ),
  logout: user => (
    $.ajax({
      type: 'DELETE',
      url: 'api/session'
    })
  )
};

export default SessionAPIUtil;
