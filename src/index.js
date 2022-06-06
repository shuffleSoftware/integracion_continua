'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT
const os = require("os");

<<<<<<< HEAD
const drodriguezRouters = require('../src/routes/drodriguez')
const chernandezRouters = require('../src/routes/chernandez')

app.use(chernandezRouters)
app.use(drodriguezRouters)

app.get('/', (req, res) => {
  res.send({
    msg: 'Hola Mundo.',
    hostname: os.hostname()
=======
const os = require("os");

app.get('/', (req, res) => {
  res.send({
      msg: "Hello world",
      hostname: os.hostname()
  })
})

app.get('/daniel_lopez', (req, res) => {
  res.send({
      msg: "Rama de Daniel"
  })
})

app.get('/alberto', (req, res) => {
  res.send({
      msg: "Rama de Alberto"
>>>>>>> parent of d3dab48... cambio alberto
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
