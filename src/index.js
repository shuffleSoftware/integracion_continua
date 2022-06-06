'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT
const os = require("os");

const drodriguezRouters = require('../src/routes/drodriguez')
const chernandezRouters = require('../src/routes/chernandez')

app.use(chernandezRouters)
app.use(drodriguezRouters)

app.get('/', (req, res) => {
  res.send({
    msg: 'Hola Mundo.',
    hostname: os.hostname()
  })
})


app.get('/alberto', (req, res) => {
  res.send({
      msg: "Rama de Alberto"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
