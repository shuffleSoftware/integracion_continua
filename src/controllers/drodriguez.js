const os = require('os')
exports.getData = (req, res) => {
  res.send({
    name: 'Carlos Daniel Rodriguez',
    profession: 'Ing en informatio',
    country: 'Santiago / Chile',
    msg: 'Hello world RUTA DRODRIGUEZ',
    hostname: os.hostname()
  })
}
