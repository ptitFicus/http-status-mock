# HTTP-STATUS-MOCK
Server that exposes an endpoint for each HTTP status code.
Useful for testing purposes.

## Usage
Start the server using `npm start`, by default the server uses the port 3000, however it's possible to modify this behaviour by passing another port number as first argument : `npm start -- 3001`.

Every HTTP status code is served on an endpoint named using the code itself. For instance the code 404 is returned by the endpoint `/404` (i.e. by accessing localhost:3000/404 with the default configuration).
