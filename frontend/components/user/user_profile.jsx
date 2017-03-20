import React from 'react';
import UserDetailContainer from './user_detail_container';
import NewTrackContainer from '../track/new_track_container';
import TrackIndexContainer from '../track/track_index_container';

const UserProfile = () => (
  <div className='audio user-profile'>
    <UserDetailContainer />
    <NewTrackContainer />
    <TrackIndexContainer />
  </div>
)

export default UserProfile;
