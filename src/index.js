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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
