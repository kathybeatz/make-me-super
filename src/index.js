import React from 'react';
import { render } from 'react-dom';
// import App from 'components/app'; // jenna dont need, replace w router 3/12/15
import { Router, browserHistory } from 'react-router'; // jenna added 3/12/15
import routes from './routes'; // jenna added 3/12/15

render (

  <Router history={browserHistory} routes={routes} />, // jenna added
  document.getElementById('app')
);

// render(<App />, document.getElementById('app'));
