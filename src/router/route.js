import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import App from '../App';
import reader from '../view/Reader/index';


const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/reader" component={reader} />
      <Route path="/" exact component={App} />
      <Redirect from={"*"} to={'/'} />
    </Switch>
  </Router>
)


export default RouteConfig