const os = require('os')
exports.getData = (req, res) => {
  res.send({
    name: 'Carol Hernandez Molina',
    profession: 'Ing en sistemas',
    country: 'Alajuela / Costa Rica',
    msg: 'Hola mundo',
    hostname: os.hostname()
  })
}