import TrackAPIUtil from '../util/track_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const UPLOAD_TRACK = 'UPLOAD_TRACK';
export const RECEIVE_PROFILE_TRACK = 'RECEIVE_PROFILE_TRACK';
export const PLAY_PAUSE_TRACK = 'PLAY_PAUSE_TRACK';
export const SELECT_PLAY_PAUSE_TRACK = 'SELECT_PLAY_PAUSE_TRACK';

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

const uploadTrack = track => ({
  type: UPLOAD_TRACK,
  track
});

const receiveProfileTrack = profileTrack => ({
  type: RECEIVE_PROFILE_TRACK,
  profileTrack
})

export const playPauseTrack = selectedTrack => ({
  type: PLAY_PAUSE_TRACK,
  selectedTrack
})

export const selectPlayPauseTrack = selectedTrack => ({
  type: SELECT_PLAY_PAUSE_TRACK,
  selectedTrack
})

export const upload = track => dispatch => (
  TrackAPIUtil
    .upload(track)
    .then(track => dispatch(uploadTrack(track)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchProfileTrack = id => dispatch => (
  TrackAPIUtil
    .fetchTrack(id)
    .then(profileTrack => dispatch(receiveProfileTrack(profileTrack)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllTracks = user_id => dispatch => (
  TrackAPIUtil
    .fetchAllTracks(user_id)
    .then(tracks => dispatch(receiveAllTracks(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchTopNTracks = (num_tracks = 8) => dispatch => (
  TrackAPIUtil
    .fetchTopNTracks(num_tracks)
    .then(tracks => dispatch(receiveAllTracks(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
