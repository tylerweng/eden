const TrackAPIUtil = {
  upload: track => (
    $.ajax({
      type: 'POST',
      url: 'api/tracks',
      data: track
    })
  )
};

export default TrackAPIUtil;
