//This module replaces 'config' in the client and exposes the clientConfig part of the server config
const initData = window.__INIT_DATA_FROM_SERVER_RENDER__;
console.log('config', initData.clientConfig); //eslint-disable-line no-console

const config = {
  clientConfig: initData.clientConfig
};
export default config;
