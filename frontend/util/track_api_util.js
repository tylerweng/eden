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
  fetchTopNTracks: (num_tracks) => (
    $.ajax({
      type: 'GET',
      url: 'api/tracks',
      data: { num_tracks }
    })
  )
};

export default TrackAPIUtil;
