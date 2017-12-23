import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hydrate} from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';
import './index.scss';


const initData = window.__INIT_DATA_FROM_SERVER_RENDER__;
//eslint-disable-next-line no-console
console.log('config', initData.clientConfig);
//eslint-disable-next-line no-console
console.log('server render stats', initData.stats);

const store = createStore(
  reducers, initData.initialState, applyMiddleware(thunk)
);

export default class Index extends Component {
  
    static propTypes = {
      route: PropTypes.object
    }
  
    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </Provider>
      );
    }
}

hydrate(<Index store={store} />, document.querySelector('#app'));