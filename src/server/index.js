import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import path from 'path';
import config from 'config';
import morgan from 'morgan';

import renderPageRoute from './routes/renderPageRoute';
import {getUsers} from './routes/apiRoute';
import banner from './utils/banner';
import getLog from './utils/logger';

const app = express();

//logging
const log = getLog();
if(config.logIncomingHttpRequests){
  const incomingLog = getLog('INCOMING');
  app.use(morgan('short', { stream: { write: message => incomingLog.info(message.trim()) }}));
}

//TODO: helmet
//dont reveal whats running server
app.disable('x-powered-by');

app.use(cookieParser());
// GZip compress responses
app.use(compression());

//static files
app.use(favicon(path.join(__dirname, '../static/favicon.ico')));
app.use('/', express.static(path.join(__dirname, '../static')));
//bundles is mapped like this so dev and prod builds both work (as dev uses src/static while prod uses dist/static)
app.use('/bundles', express.static(path.join(__dirname, '../../dist/bundles')));

//API
app.get('/api/users', getUsers);

//will handle page routing and 404 fallbacks
app.get('*', renderPageRoute);


const server = app.listen(config.port, function () {
  banner();
  log.info(`Server started on port ${server.address().port} in ${app.get('env')} mode`);
  //Its very useful to output init config to console at startup but we deliverately dont dump it to
  //log files incase it contains sensetive info
  console.log(config);//eslint-disable-line no-console
  //'ready' is a hook used by the e2e (integration) tests (see node-while)
  server.emit('ready');
});

//export server instance so we can hook into it in e2e tests etc
export default server;