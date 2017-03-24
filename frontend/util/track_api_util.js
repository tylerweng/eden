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
  fetchNextTrack: selectedTrack => (
    $.ajax({
      type: 'GET',
      url: `api/tracks`,
      data: { selectedTrack }
    })
  ),
  fetchSimilarTracks: similarTrack => (
    $.ajax({
      type: 'GET',
      url: `api/tracks`,
      data: { similarTrack }
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
  ),
  fetchLikeStatus: id => (
    $.ajax({
      type: 'GET',
      url: `api/tracks/${id}`,
      data: { retrieveLikeStatus: 'Retrieving Like Status!' }
    })
  ),
  showProfile: id => (
    $.ajax({
      type: 'GET',
      url: `api/tracks/${id}`
    })
  )
};

export default TrackAPIUtil;
