import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

import Reader from './routes/Reader/index';
import OlympicSpirit from './routes/OlympicSpirit/index';
import LiteraryNews from './routes/LiteraryNews/index';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={Reader} />
        <Route path="/reader" exact component={Reader} />
        <Route path="/olympicspirit" exact component={OlympicSpirit} />
        <Route path="/literarynews" exact component={LiteraryNews} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
