const os = require('os')
const app = require('./app')

app.set('port', process.env.PORT || 3000)
app.set('host', os.networkInterfaces().eth0[0].address)

const server = app.listen(app.get('port'))

server.on('listening', () =>  console.log(`Сервер запущен по адресу http://${app.get('host')}:${app.get('port')}!`))
