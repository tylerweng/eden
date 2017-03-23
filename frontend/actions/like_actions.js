import LikeAPIUtil from '../util/like_api_util';
import { receiveErrors, resetErrors } from './error_actions';
import { fetchLikeStatus } from './track_actions';

export const RECEIVE_TRACK_LIKE = 'RECEIVE_TRACK_LIKE';
export const RECEIVE_TRACK_UNLIKE = 'RECEIVE_TRACK_UNLIKE';
export const RECEIVE_USER_LIKES = 'RECEIVE_USER_LIKES';

const receiveTrackLike = like => ({
  type: RECEIVE_TRACK_LIKE,
  like
});

const receiveTrackUnlike = like => ({
  type: RECEIVE_TRACK_UNLIKE,
  like
});

const receiveUserLikes = likes => ({
  type: RECEIVE_USER_LIKES,
  likes
});

export const likeTrack = track_id => dispatch => {
  return LikeAPIUtil
    .likeTrack(track_id)
    .then(like => dispatch(receiveTrackLike(like)),
          errors => console.log('buffering'))
    .then(() => dispatch(fetchLikeStatus(track_id)));
};

export const unlikeTrack = id => dispatch => {
  return LikeAPIUtil
    .unlikeTrack(id)
    .then(like => {
      dispatch(fetchLikeStatus(like ? like.like.track_id : like));
      dispatch(receiveTrackUnlike(like));
    },  errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchUserLikes = user_id => dispatch => (
  LikeAPIUtil
    .fetchUserLikes(user_id)
    .then(likes => dispatch(receiveUserLikes(likes)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
