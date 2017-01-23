const chai = require('chai')
const http = require('http')
const expect = chai.expect

const server = require('./server')

// Will contain the server
var s

before(() => {
  s = server.startServer()
})

describe('Every status is present', (done) => {
  it('Every endpoint exists and returns correct status', () => {
    const codes = server.codes
    codes.forEach(code => {
      const options = {
        method: 'HEAD',
        host: 'localhost',
        port: '3000',
        path: `/${code}`
      }

      const req = http.request(options, response => {
        expect(response.statusCode).to.equals(code)
        done()
      })

      req.end()
    })
  })
})

describe('Response content is the correct status message', () => {
  it('404 endpoint returns "Not Found" message', (done) => {
    const options = {
      method: 'GET',
      host: 'localhost',
      port: '3000',
      path: '/404'
    }

    const req = http.get({host: 'localhost', port: '3000', path: '/404'},
    response => {
      var body = '';
      response.on('data', d => body += d)

      response.on('end', () => {
        expect(body).to.equals('Not Found')
        done()
      })
    })

    req.end()
  })
})

after(() => {
  server.stopServer(s)
})
