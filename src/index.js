'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT

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
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
