import React from 'react';
import TopNTrackIndexContainer from '../track/top_n_track_index_container';
import Splashpage from './splashpage';

const Homepage = () => (
  <div className='homepage'>
    <TopNTrackIndexContainer />
    <Splashpage />
  </div>
);

export default Homepage;
