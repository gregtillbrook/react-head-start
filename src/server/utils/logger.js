import path from 'path';
import winston, {config as winstonConfig} from 'winston';
import callerCallsite from 'caller-callsite';
import config from 'config';

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
  return `${colors.dim}${time}${colors.reset} ${logLevel} ${colors.dim}[${context}]${colors.reset} ${options.message}`;
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
        json: true,
        maxsize: config.logging.maxLogFileSizeInMB * BYTES_PER_MEGABYTE, //5MB
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