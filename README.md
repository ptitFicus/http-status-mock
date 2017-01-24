[![Build Status](https://travis-ci.org/ptitFicus/http-status-mock.svg?branch=master)](https://travis-ci.org/ptitFicus/http-status-mock)
[![npm version](https://badge.fury.io/js/http-status-mock.svg)](https://badge.fury.io/js/http-status-mock)

# HTTP-STATUS-MOCK
Server that exposes an endpoint for each HTTP status code.
Useful for testing purposes.

## Usage

### Standalone server
Start the server using `npm start`, by default the server uses the port 3000, however it's possible to modify this behaviour by passing another port number as first argument : `npm start -- 3001`.

Every HTTP status code is served on an endpoint named using the code itself. For instance the code 404 is returned by the endpoint `/404` (i.e. by accessing `localhost:3000/404` with the default configuration).

### In another project
This library exposes two methods `startServer` and `stopServer` that allow to start/stop the server prrogramatically.
This is usefull when using this projet for unit tests, for instance using mocha :

```js
import { startServer, stopServer } from 'http-status-mock'


let mockServer
before(() => mockServer = startServer())

// Test whatever you need

after(() => stopServer(mockServer))
```