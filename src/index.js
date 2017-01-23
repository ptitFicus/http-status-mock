const serverActions = require('./server/server')

module.exports = {
  startServer: serverActions.startServer,
  stopServer: serverActions.stopServer
}
