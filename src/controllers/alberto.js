const os = require('os')
exports.getData = (req, res) => {
  res.send({
    name: 'Alberto Pardo Marti',
    profession: 'Ingeniero Desarrollador',
    country: 'Barcelona / España ',
    msg: 'Mesaje de test',
    hostname: os.hostname()
  })
}