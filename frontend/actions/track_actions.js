import TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const login = track => dispatch => (
  TrackAPIUtil
    .upload(track)
    .then(track => dispatch(receiveTrack(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
