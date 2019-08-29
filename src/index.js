import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/route';
// import {Provider} from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import store from './redux/store/store';

ReactDOM.render(<Route />, document.getElementById('root'));

serviceWorker.unregister();
