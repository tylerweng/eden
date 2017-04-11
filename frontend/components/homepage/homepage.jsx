import React from 'react';
import TopNTrackIndexContainer from '../track/top_n_track_index_container';
import Splashpage from './splashpage';
import Footer from './footer';

const Homepage = () => (
  <div className='homepage-container'>
    <div className='homepage'>
      <TopNTrackIndexContainer />
      <Splashpage />
    </div>
    <Footer />
  </div>
);

export default Homepage;
