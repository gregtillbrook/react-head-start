import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import config from 'config';
import {Helmet} from 'react-helmet';

import routes from '../../client/routes';
import reducers from '../../client/reducers';


export default async (req, res) => {
  //TODO: top level error handler
  //TODO: set status on 404/500
  let content, store, helmet,
    clientData = {
      clientConfig: config.clientConfig,
      initialState: {},
      renderStats: {}
    }, 
    dataFetchTime = 0, 
    renderTime = 0;

  if(config.enableServerSideRender){
    const dataFetchStart = Date.now();
    store = await fetchDataAndInitReduxStore(req.url);
    clientData.initialState = store.getState();
    dataFetchTime = Date.now() - dataFetchStart;
    
    const renderStart = Date.now();
    content = renderReactAppContent(store, req.url);
    helmet = Helmet.renderStatic();
    renderTime = Date.now() - renderStart;
  }

  clientData.stats = {
    'ssr data fetch time':dataFetchTime,
    'ssr render time':renderTime,
    'total ssr time':dataFetchTime+renderTime
  };

  res.setHeader('Content-Type', 'text/html');
  res.send(renderHTML(content, clientData, helmet));

};

async function fetchDataAndInitReduxStore(url){
  const store = createStore(reducers, applyMiddleware(thunk));  

  const branch = matchRoutes(routes, url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
  });
  await Promise.all(promises);

  return store;
}

function renderReactAppContent(store, url){
  let context = {};
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
}

function renderHTML(content, clientData, helmet){
  return `<!doctype html>
<html ${helmet.htmlAttributes.toString()} >
  <head>
    <meta charset="utf-8" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}

    <link rel="stylesheet" href="/bundles/index.css"></head>
  </head>
  <body ${helmet.bodyAttributes.toString()} >
  
    <div id="app">${content}</div>
  
    <script>
      window.__INIT_DATA_FROM_SERVER_RENDER__ = ${JSON.stringify(clientData)};
    </script>
    <script src="/bundles/index.js"></script>
  </body>
</html>  
  `;
}