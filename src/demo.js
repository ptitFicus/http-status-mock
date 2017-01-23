const serverActions = require('./index')

const port = process.argv[2] || 3000

serverActions.startServer(port)
