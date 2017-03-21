import React from 'react';
import TrackIndexContainer from '../track/track_index_container';
import MyStationsDetailContainer from './my_stations_detail_container';

const MyStations = () => (
  <div className='audio my-stations'>
    <MyStationsDetailContainer />
    <TrackIndexContainer />
  </div>
)

export default MyStations;
