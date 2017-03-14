// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import SessionFormContainer from './session/session_form_container';


// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <HashRouter>
//       <Route path='/'>
//         <App>
//           <Route path='/api/session' component={ SessionFormContainer } />
//           <Route path='/api/users' component={ SessionFormContainer } />
//         </App>
//       </Route>
//     </HashRouter>
//   </Provider>
// );

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Route path='/'>
          <App>
            <Route path='/api/session' component={ SessionFormContainer } />
            <Route path='/api/users' component={ SessionFormContainer } />
          </App>
        </Route>
      </HashRouter>
    </Provider>
  );
};

export default Root;
