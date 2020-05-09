const express = require('express')
const bodyParser = require('body-parser')

const Chart = require('./class/chart.class')
const chart = new Chart(400, 400)


const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use('/image', express.static('image'));

app.post('/build_chart', (req, res) => {
    res.json(req.body)
})

app.get('/', async (req, res) => {
    res.send("Hello world")
});

app.get('/image', async (req, res) => {
    let chart_url = await chart.buildChart()
    res.send(`http://${app.get('host')}:${app.get('port')}/image/${chart_url}`)
});

module.exports = app



