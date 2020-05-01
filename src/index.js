let express = require('express');
let app = express();

let fs = require('fs');

let JSDOM = require('jsdom').JSDOM;

let jsdom = new JSDOM('<body><div id="container"></div></body>', {runScripts: 'dangerously'});

let window = jsdom.window;


let anychart = require('anychart')(window);
let anychartExport = require('anychart-nodejs')(anychart);

let chart = anychart.pie([10, 20, 7, 18, 30]);
chart.bounds(0, 0, 800, 600);
chart.container('container');
chart.draw();
 
anychartExport.exportTo(chart, 'png').then(function(image) {
  fs.writeFile('charts/anyc678687678hart.png', image, function(fsWriteError) {
    if (fsWriteError) {
      console.log(fsWriteError);
    } else {
      console.log('Complete');
    }
  });
}, function(generationError) {
  console.log(generationError);
});

app.get('/', function (req, res) {
  res.json({})
});


app.listen(3000, function () {
  console.log('Export server listening on port 3000!')
});





