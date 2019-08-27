import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from '../App';
import reader from '../view/Reader';
// import bookIntroduce from '../view/bookIntroduce';
// import about from '../view/about';
// import read from '../view/read';
// import changeOrigin from '../view/changeOrigin';


const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/reader" exact component={reader} />
      <Route component={App} /> 
      {/* <Route path="/bookIntroduce/:id"  component={bookIntroduce} />
      <Route path="/about" exact component={about} />
      <Route path="/read/:id" exact component={read} />
      <Route path="/changeOrigin/:id" exact component={changeOrigin} />
      <Route component={index} /> */}
    </Switch>
  </Router>
)


export default RouteConfig