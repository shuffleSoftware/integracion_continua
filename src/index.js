'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT

const os = require('os')

const drodriguezRouters = require('../src/routes/drodriguez')

app.use(drodriguezRouters)

app.get('/', (req, res) => {
  res.send({
    msg: 'Hello world',
    hostname: os.hostname()
  })
})

app.get('/carlos_rodriguez', (req, res) => {
  res.send({
    name: 'Carlos Daniel Rodriguez',
    profession: 'Ing en informatio',
    country: 'Santiago / Chile'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
