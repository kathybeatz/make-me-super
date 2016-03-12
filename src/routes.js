import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Search from './components/search';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="search" component={Search} />
  </Router>
);

/* valid routes

path      component
/         App
/search   Search
/profile  Profile

*/
