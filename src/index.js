'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT

const os = require('os');

const drodriguezRouters = require('../src/routes/drodriguez')
const chernandezRouters = require('../src/routes/chernandez')
const albertoRouters = require('../src/routes/alberto')

app.use(chernandezRouters)
app.use(drodriguezRouters)
app.use(albertoRouters)


app.get('/', (req, res) => {
  res.send({
    msg: 'Hola Mundo.',
    hostname: os.hostname()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
