import log4js from 'log4js';
import path from 'path';
import config from 'config';

log4js.configure(config.log4js);

export default function getLog(filePath) {
  let fileName = filePath ? path.basename(filePath) : ' ';
  return log4js.getLogger(fileName);
}
