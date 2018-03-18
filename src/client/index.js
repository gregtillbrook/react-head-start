//this is the entry point for the client app bundle
import './utils/polyfills';
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
import 'config'; //see utils/clientConfig.js
import './index.scss'; //Parcel will use this import to build the css bundle 


//The SSR(Sever Side Render) passes data to client via __INIT_DATA_FROM_SERVER_RENDER__
const initData = window.__INIT_DATA_FROM_SERVER_RENDER__;
console.log('server render stats', initData.stats);  //eslint-disable-line no-console 

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