//put all app configuration here with a sensible default
//more docs on how config files work = https://github.com/lorenwest/node-config/wiki/Configuration-Files
//note: temp local config can be put into config/local.js (it's git ignored)

module.exports = {
  host: undefined,
  port: 5000,

  //config inside here will be available in the client browser app
  clientConfig:{
    //WARNING: dont put anything sensitive in here - it WILL be publicly visible
    exampleProp:1234
  },

  enableServerSideRender:true,

  logOutgoingNodeHttpRequests:true,
  
  log4js:{
    appenders:{
      console:{
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[%d{ISO8601} %-5p [%c]%] %m'
        }
      },
      file:{
        type: 'file',
        filename: 'logs/server.log',
        layout: {
          type: 'pattern',
          pattern: '%d{ISO8601} %-5p [%c] %m'
        }
      }
    },
    categories: {
      default: { appenders: [ 'console', 'file' ], level: 'info' }
    }
  }
};
