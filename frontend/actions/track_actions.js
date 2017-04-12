import TrackAPIUtil from '../util/track_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_NEXT_TRACK = 'RECEIVE_NEXT_TRACK';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const UPLOAD_TRACK = 'UPLOAD_TRACK';
export const RECEIVE_PROFILE_TRACK = 'RECEIVE_PROFILE_TRACK';
export const PLAY_PAUSE_TRACK = 'PLAY_PAUSE_TRACK';
export const SELECT_PLAY_PAUSE_TRACK = 'SELECT_PLAY_PAUSE_TRACK';
export const SELECT_TRACK = 'SELECT_TRACK';
export const RECEIVE_LIKE_STATUS = 'RECEIVE_LIKE_STATUS';
export const RECEIVE_TRACK_PROFILE = 'RECEIVE_TRACK_PROFILE';
export const RECEIVE_SIMILAR_TRACKS = 'RECEIVE_SIMILAR_TRACKS';

const receiveSimilarTracks = similarTracks => ({
  type: RECEIVE_SIMILAR_TRACKS,
  similarTracks
});

const receiveNextTrack = nextTrack => ({
  type: RECEIVE_NEXT_TRACK,
  nextTrack
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
});

const receiveLikeStatus = likeStatus => ({
  type: RECEIVE_LIKE_STATUS,
  likeStatus
});

const receiveTrackProfile = profileTrack => ({
  type: RECEIVE_TRACK_PROFILE,
  profileTrack
});


export const playPauseTrack = selectedTrack => ({
  type: PLAY_PAUSE_TRACK,
  selectedTrack
});

export const selectTrack = selectedTrack => ({
  type: SELECT_TRACK,
  selectedTrack
});

export const selectPlayPauseTrack = selectedTrack => ({
  type: SELECT_PLAY_PAUSE_TRACK,
  selectedTrack
});

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

export const fetchNextTrack = selectedTrack => dispatch => (
  TrackAPIUtil
    .fetchNextTrack(selectedTrack)
    .then(nextTrack => dispatch(receiveNextTrack(nextTrack)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchSimilarTracks = similarTrack => dispatch => (
  TrackAPIUtil
    .fetchSimilarTracks(similarTrack)
    .then(similarTracks => dispatch(receiveSimilarTracks(similarTracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllTracks = user_id => dispatch => (
  TrackAPIUtil
    .fetchAllTracks(user_id)
    .then(tracks => dispatch(receiveAllTracks(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchTopNTracks = (num_tracks = 10) => dispatch => (
  TrackAPIUtil
    .fetchTopNTracks(num_tracks)
    .then(tracks => dispatch(receiveAllTracks(tracks)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchLikeStatus = id => dispatch => (
  TrackAPIUtil
    .fetchLikeStatus(id)
    .then(likeStatus => dispatch(receiveLikeStatus(likeStatus)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const showProfile = id => dispatch => (
  TrackAPIUtil
    .showProfile(id)
    .then(profileTrack => dispatch(receiveTrackProfile(profileTrack)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
