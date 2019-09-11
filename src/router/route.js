import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import App from '../App';
import Reader from '../view/Reader/index';
import OlympicSpirit from '../view/OlympicSpirit/index';
import LiteraryNews from '../view/LiteraryNews/index';


const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/reader" component={Reader} />
      <Route path="/olympicspirit" component={OlympicSpirit} />
      <Route path="/literarynews" component={LiteraryNews} />
      <Route path="/" exact component={App} />
      <Redirect from={"*"} to={'/'} />
    </Switch>
  </Router>
)


export default RouteConfig