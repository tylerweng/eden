// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_NEXT_TRACK,
  RECEIVE_PROFILE_TRACK,
  RECEIVE_ALL_TRACKS,
  RECEIVE_TOP_20_TRACKS,
  UPLOAD_TRACK,
  SELECT_TRACK_PROFILE_ID,
  PLAY_PAUSE_TRACK,
  SELECT_PLAY_PAUSE_TRACK,
  SELECT_TRACK,
  RECEIVE_LIKE_STATUS,
  RECEIVE_TRACK_PROFILE
} from '../actions/track_actions';

const _nullTracks = Object.freeze({
  tracks: {},
  selectedTrack: null,
  likeStatus: 'neutral',
  nextTrack: null,
  playing: false,
  profileTrack: null
});

const tracksReducer = (state = _nullTracks, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_LIKE_STATUS:
      newState.likeStatus = action.likeStatus[0];
      return newState;
    case RECEIVE_NEXT_TRACK:
      newState.nextTrack = action.nextTrack;
      return newState;
    case RECEIVE_PROFILE_TRACK:
      newState.profileTrack = action.profileTrack;
      return newState;
    case UPLOAD_TRACK:
      newState.tracks = merge(newState.tracks, action.track);
      return newState;
    case RECEIVE_ALL_TRACKS:
      if(action.tracks.length) newState.tracks = action.tracks;
      return newState;
    case RECEIVE_TOP_20_TRACKS:
      newState.tracks = action.tracks;
      return newState;
    case SELECT_TRACK:
      newState.selectedTrack = action.selectedTrack;
      newState.playing = true;
      return newState;
    case PLAY_PAUSE_TRACK:
      newState.playing = !state.playing;
      return newState;
    case SELECT_PLAY_PAUSE_TRACK:
      const priorTrack = state.selectedTrack;
      if (!priorTrack) {
        newState.playing = true
      }
      else if (priorTrack.track_url === action.selectedTrack.track_url
                && state.playing === true) {
        newState.playing = false;
      } else {
        newState.playing = true;
      }
      newState.selectedTrack = action.selectedTrack;
      newState.profileTrack = action.selectedTrack;
      return newState;
    case RECEIVE_TRACK_PROFILE:
      newState.profileTrack = action.profileTrack;
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
