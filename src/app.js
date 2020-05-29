const express = require('express')
const bodyParser = require('body-parser')

const ChartClass = require('./class/chart.class')
const chart = new ChartClass(400, 300)


const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.post('/build_chart', (req, res) => {
    res.json(req.body)
})

app.get('/', async (req, res) => {
    res.send("Hello world")
});

app.get('/image', async (req, res) => {
    res.send(await chart.buildChart())
});

module.exports = app




