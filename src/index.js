'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT

const chernandezRouters = require('../src/routes/chernandez')

const os = require("os");

app.use(chernandezRouters)

app.get('/', (req, res) => {
  res.send({
      msg: "Hola Mundo.",
      hostname: os.hostname()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
