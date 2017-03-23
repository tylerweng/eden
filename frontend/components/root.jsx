// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import Homepage from './homepage/homepage';
import UserProfile from './user/user_profile';
import MyStations from './user/my_stations';
import TrackProfile from './track/track_profile';
import TrackDetailContainer from './track/track_detail_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App>
        <Redirect from="/" to="/homepage" />
        <Route path='/homepage' component={ Homepage } />
        <Route path='/myprofile' component={ UserProfile } />
        <Route path='/nowplaying' component={ TrackProfile } />
        <Route path='/mystations' component={ MyStations } />
        <Route path='/tracks/:id' component={ TrackDetailContainer } />
      </App>
    </HashRouter>
  </Provider>
);

export default Root;
