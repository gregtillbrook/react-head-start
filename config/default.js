//put all app configuration here with a sensible default

module.exports = {
  host: undefined,
  port: 5000,

  //config inside here will be available in the browser react app
  clientConfig:{
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
