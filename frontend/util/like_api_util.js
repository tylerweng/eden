const LikeAPIUtil = {
  likeTrack: track_id => (
    $.ajax({
      type: 'POST',
      url: `/api/likes`,
      data: { like: {track_id} }
    })
  ),
  fetchUserLikes: user_id => (
    $.ajax({
      type: 'GET',
      url: `/api/likes`,
      data: { user_id }
    })
  )
};

export default LikeAPIUtil;
