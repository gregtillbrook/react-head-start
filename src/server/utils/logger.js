/*
Setup for winston logger. Default logger setup is to console and to file. Common
config (like desired log level, or log file location) is already controlled by config 
files (see config/default.js) so they can be easily configured per environment.
*/
import path from 'path';
import winston, {config as winstonConfig} from 'winston';
import callerCallsite from 'caller-callsite';
import config from 'config';
import util from 'util';

import colors from './terminalColors';


const BYTES_PER_MEGABYTE = 1024*1024;

winston.addColors({
  'debug':'grey',
  'info':'white',
  'warn':'yellow',
  'error':'red'
});

function formatLogMessage(options, context = ''){
  const time = (new Date()).toISOString();
  const logLevel = winstonConfig.colorize(options.level, options.level.toUpperCase().padEnd(5));
  const meta = isEmptyObjectOrUndefined(options.meta) ? '' : util.format(options.meta);
  return `${colors.dim}${time}${colors.reset} ${logLevel} ${colors.dim}[${context}]${colors.reset} ${options.message} ${meta}`;
}

export default function getLog(context) {
  if(!context){
    const filePath = callerCallsite().getFileName();
    context = path.basename(filePath);
  }  

  const logger = new winston.Logger({
    transports: [

      new (winston.transports.Console)({
        level: config.logging.consoleLogLevel,
        handleExceptions: true,
        json: false,
        colorize: true,
        formatter: (options)=>{
          return formatLogMessage(options, context);
        }
      }),

      new (winston.transports.File)({ 
        level: config.logging.logFileLogLevel,
        filename: config.logging.logFilePath,
        handleExceptions: true,
        json: false,
        maxsize: config.logging.maxLogFileSizeInMB * BYTES_PER_MEGABYTE,
        maxFiles: config.logging.maxLogFileCount,
        colorize: false,
        formatter: (options)=>{
          return formatLogMessage(options, context);
        }
      })
      
    ],
    exitOnError: false
  });

  return logger;
}

function isEmptyObjectOrUndefined(obj){
  return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object);
}