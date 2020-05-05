const os = require('os')
const host = os.networkInterfaces().eth0[0].address
const port = process.env.PORT || 3000;
const express = require('express')
const Chart = require('./chart.class')

const chart = new Chart(400, 400)

const app = express();

app.use('/image', express.static('image'));

app.get('/', async (req, res) => {
    let chart_url = await chart.buildChart()
    res.send(`http://${host}:${port}/image/${chart_url}`)
});


app.listen(3000, function () {
    console.log(`Сервер запущен по адресу http://${os.networkInterfaces().eth0[0].address}:${port}!`)
})




