import React from 'react';
import NewTrackContainer from '../track/new_track_container';
import TrackIndexContainer from '../track/track_index_container';

const UserProfile = () => (
  <div className='audio user-profile'>
    <NewTrackContainer />
    <TrackIndexContainer />
  </div>
)

export default UserProfile;
