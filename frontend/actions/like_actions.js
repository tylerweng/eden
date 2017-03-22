import LikeAPIUtil from '../util/like_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_TRACK_LIKE = 'RECEIVE_TRACK_LIKE';
export const RECEIVE_USER_LIKES = 'RECEIVE_USER_LIKES';

const receiveTrackLike = like => ({
  type: RECEIVE_TRACK_LIKE,
  like
});

const receiveUserLikes = likes => ({
  type: RECEIVE_USER_LIKES,
  likes
});

export const likeTrack = track_id => dispatch => (
  LikeAPIUtil
    .likeTrack(track_id)
    .then(like => dispatch(receiveTrackLike(like)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchUserLikes = user_id => dispatch => (
  LikeAPIUtil
    .fetchUserLikes(user_id)
    .then(likes => dispatch(receiveUserLikes(likes)),
          errors => dispatch(receiveErrors(errors.responseJSON)))
);
