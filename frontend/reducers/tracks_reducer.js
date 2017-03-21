// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS,
  RECEIVE_TOP_20_TRACKS,
  UPLOAD_TRACK,
  SELECT_TRACK,
  PLAY_PAUSE_TRACK,
  SELECT_PLAY_PAUSE_TRACK
} from '../actions/track_actions';

const _nullTracks = Object.freeze({
  tracks: {},
  selectedTrack: null,
  playing: false,
  selectedTrackId: null
})
const tracksReducer = (state = _nullTracks, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TRACK:
      newState.tracks = action.track;
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
    case SELECT_TRACK:
      newState.selectedTrackId = action.selectedTrack.id;
      return newState;
    case PLAY_PAUSE_TRACK:
      newState.playing = !state.playing;
      return newState;
    case SELECT_PLAY_PAUSE_TRACK:
      const priorTrackId = state.selectedTrackId;
      if (priorTrackId) {
        newState.playing = priorTrackId === action.selectedTrack.id
                                                    ? !state.playing
                                                    : true;
      } else {
        newState.playing = true;
      }
      newState.selectedTrack = action.selectedTrack;
      newState.selectedTrackId = action.selectedTrack.id;
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
