//put all app configuration here with a sensible default and then override per machine/environment/etc in other config files
//more docs on how config files work = https://github.com/lorenwest/node-config/wiki/Configuration-Files
//note: temporary local config (for local debugging/development) can be put into config/local.js (it's git ignored)
module.exports = {
  host: undefined,
  port: 5000,

  //config inside here will be available in the client browser app
  clientConfig:{
    //WARNING: dont put anything sensitive in here - it WILL be publicly visible in the client browser
    apiHost: 'http://localhost:5000',
  },

  enableServerSideRender:true,

  logIncomingHttpRequests:true,
  logOutgoingHttpRequests:true,
  
  logging:{
    consoleLogLevel:'debug',
    logFileLogLevel:'info',
    logFilePath:'./logs/server.log',
    maxLogFileSizeInMB:5,
    maxLogFileCount:5
  },
};
