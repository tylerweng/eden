import React from 'react';
import UserDetailContainer from './user_detail_container';
import NewTrackContainer from '../track/new_track_container';
import MyLikesContainer from './my_likes_container';
import MyDislikesContainer from './my_dislikes_container';

const UserProfile = () => (
  <div className='audio user-profile'>
    <UserDetailContainer />
    <NewTrackContainer />
    <MyLikesContainer />
    <MyDislikesContainer />
  </div>
)

export default UserProfile;
