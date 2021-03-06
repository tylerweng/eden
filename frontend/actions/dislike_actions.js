import DislikeAPIUtil from '../util/dislike_api_util';
import { receiveErrors, resetErrors } from './error_actions';
import { fetchLikeStatus } from './track_actions';


export const RECEIVE_TRACK_DISLIKE = 'RECEIVE_TRACK_DISLIKE';
export const RECEIVE_TRACK_UNDISLIKE = 'RECEIVE_TRACK_UNDISLIKE';
export const RECEIVE_USER_DISLIKES = 'RECEIVE_USER_DISLIKES';

const receiveTrackDislike = dislike => ({
  type: RECEIVE_TRACK_DISLIKE,
  dislike
});

const receiveTrackUndislike = dislike => ({
  type: RECEIVE_TRACK_UNDISLIKE,
  dislike
});

const receiveUserDislikes = dislikes => ({
  type: RECEIVE_USER_DISLIKES,
  dislikes
});

export const dislikeTrack = track_id => dispatch => (
  DislikeAPIUtil
    .dislikeTrack(track_id)
    .then(dislike => dispatch(receiveTrackDislike(dislike)),
          errors => console.log('buffering'))
    .then(() => dispatch(fetchLikeStatus(track_id)))
);

export const undislikeTrack = id => dispatch => {
  return DislikeAPIUtil
    .undislikeTrack(id)
    .then(dislike => {
      dispatch(fetchLikeStatus(dislike ? dislike.dislike.track_id : dislike));
      dispatch(receiveTrackUndislike(dislike));
    },  errors => dispatch(receiveErrors(errors.responseJSON)))
};


export const fetchUserDislikes = user_id => dispatch => (
  DislikeAPIUtil
    .fetchUserDislikes(user_id)
    .then(dislikes => dispatch(receiveUserDislikes(dislikes)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
