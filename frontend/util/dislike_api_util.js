const DislikeAPIUtil = {
  dislikeTrack: track_id => (
    $.ajax({
      type: 'POST',
      url: `/api/dislikes`,
      data: { dislike: {track_id} }
    })
  ),
  undislikeTrack: id => (
    $.ajax({
      type: 'DELETE',
      url: `/api/dislikes/${id}`
    })
  ),
  fetchUserDislikes: user_id => (
    $.ajax({
      type: 'GET',
      url: `/api/dislikes`,
      data: { user_id }
    })
  )
};

export default DislikeAPIUtil;
