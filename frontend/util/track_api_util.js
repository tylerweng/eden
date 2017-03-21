const TrackAPIUtil = {
  upload: track => (
    $.ajax({
      type: 'POST',
      url: 'api/tracks',
      data: track
    })
  ),
  fetchTrack: id => (
    $.ajax({
      type: 'GET',
      url: `api/tracks/${id}`
    })
  ),
  fetchAllTracks: user_id => (
    $.ajax({
      type: 'GET',
      url: 'api/tracks',
      data: { user_id }
    })
  ),
  fetchTop20Tracks: () => (
    $.ajax({
      type: 'GET',
      url: 'api/tracks'
    })
  )
};

export default TrackAPIUtil;
