import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/route';
import {Provider} from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store';

ReactDOM.render(<Provider store={store}>
    <Route />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
