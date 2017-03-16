const TrackAPIUtil = {
  upload: track => (
    $.ajax({
      type: 'POST',
      url: 'api/tracks',
      data: track
    })
  ),
  fetchAllTracks: user_id => {
  return (
    $.ajax({
      type: 'GET',
      url: 'api/tracks',
      data: { user_id }
    })
  )}
};

export default TrackAPIUtil;
