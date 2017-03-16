import TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const upload = track => dispatch => (
  TrackAPIUtil
    .upload(track)
    .then(track => dispatch(receiveTrack(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllTracks = user_id => dispatch => (
  TrackAPIUtil
    .fetchAllTracks(user_id)
    .then(tracks => dispatch(receiveAllTracks(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
