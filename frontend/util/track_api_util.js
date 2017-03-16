const TrackAPIUtil = {
  upload: track => (
    $.ajax({
      type: 'POST',
      url: 'api/tracks',
      data: track
    })
  ),
  fetchAllTracks: () => (
    $.ajax({
      type: 'GET',
      url: 'api/tracks'
    })
  )
};

export default TrackAPIUtil;
