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
  SELECT_PLAY_PAUSE_TRACK
} from '../actions/track_actions';

const _nullTracks = Object.freeze({
  tracks: {},
  selectedTrack: null,
  nextTrack: null,
  playing: false,
  profileTrack: null
});

const tracksReducer = (state = _nullTracks, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
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
      newState.tracks = action.tracks;
      return newState;
    case RECEIVE_TOP_20_TRACKS:
      newState.tracks = action.tracks;
      return newState;
    case PLAY_PAUSE_TRACK:
      newState.playing = !state.playing;
      return newState;
    case SELECT_PLAY_PAUSE_TRACK:
      const priorTrack = state.selectedTrack;
      if (priorTrack) {
        newState.playing = (priorTrack === action.selectedTrack
                                          ? !state.playing
                                          : true);
      } else {
        newState.playing = true;
      }
      newState.selectedTrack = action.selectedTrack;
      newState.profileTrack = action.selectedTrack;
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
