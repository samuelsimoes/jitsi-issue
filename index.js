const express = require('express')
const fs = require('fs')
const https = require('https')

let app = express()

app.use('/', express.static('public'))

let server = https.createServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert')
}, app)

server.listen(process.env.PORT || 3000)
