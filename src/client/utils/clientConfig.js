//This module replaces 'config' in the client and exposes the clientConfig part of the server config
//see package.json "browser" mappings

//This module initialises itself at import time to reduce the risk of other client code
//accessing config before it's ready
const initData = window.__INIT_DATA_FROM_SERVER_RENDER__ || {clientConfig:{}};
console.log('config', initData.clientConfig); //eslint-disable-line no-console

const config = {
  //note: structure follows that of config object on server side - except we only have 
  //access 'clientConfig' part of the config here
  clientConfig: initData.clientConfig
};
export default config;
