const codes = [ 100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 207, 210, 226, 300, 301, 302, 303, 304, 305, 307, 308, 310, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 449, 450, 451, 456, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511]

const express = require('express')
app = express()

const port = process.argv[2] || 3000

codes.forEach(code => {
  app.get(`/${code}`, function (req, res) {
    res.sendStatus(code);
  })
})

app.listen(port, function () {
  console.log(`Application now listening on port ${port}!`);
})
