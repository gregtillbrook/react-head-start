/*
 Allows logging of all OUTGOING http requests from the node instance
 Can be really useful when debugging
*/
import config from 'config';
import globalLog from 'global-request-logger';
import getLog from './logger';


const log = getLog('OUTGOING');

function logNetworkData(request, response){
  let url = request.protocol + '//' + request.hostname + request.path + (request.query ? '?'+ request.query : '');
  if(response.statusCode >= 400){
    log.error(request.method, url, response.statusCode);
    log.error('Request=', request);
    log.error('Response=', response);
  }else{
    log.info(request.method, url, response.statusCode);
  }
}

if(config.logOutgoingHttpRequests){
  globalLog.initialize();
  globalLog.on('success', logNetworkData);
  globalLog.on('error', logNetworkData);
}
