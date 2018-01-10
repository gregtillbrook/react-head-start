import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import path from 'path';
import config from 'config';

import renderPageRoute from './routes/renderPageRoute';
import {getUsers} from './routes/apiRoute';
import banner from './utils/banner';
import getLog from './utils/logger';

const log = getLog(__filename);
const app = express();


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
  //eslint-disable-next-line no-console
  console.log(config);
  server.emit('ready');  
});

//export server instance so we can hook into it in e2e tests etc
export default server;