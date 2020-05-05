const express = require('express');
const fs = require('fs');
const { CanvasRenderService } = require('chartjs-node-canvas');

const app = express();



const width = 400;
const height = 400;

const chartCallback = (ChartJS) => {
  // Global config example: https://www.chartjs.org/docs/latest/configuration/
  ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
  // Global plugin example: https://www.chartjs.org/docs/latest/developers/plugins.html
  ChartJS.plugins.register({
    // plugin implementation
  });
  // New chart type example: https://www.chartjs.org/docs/latest/developers/charts.html
  ChartJS.controllers.MyType = ChartJS.DatasetController.extend({
    // chart implementation
  });
};
const canvasRenderService = new CanvasRenderService(width, height, chartCallback);

(async () => {
  const configuration = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(220,165,20)',
        borderColor: 'rgb(255, 99, 132)',
        data: [50, 10, 5, 2, 20, 30, 45]
      },
        {
          label: 'My First dataset',
          borderColor: 'rgba(92, 84, 84, 0.41)',
          data: [50, 10, 8, 24, 20, 54, 45],
          fill: false,
          borderDash: [5, 5],
          pointBackgroundColor: 'rgba(0, 117, 255, 0.5)',
        }
      ]
    },

    // Configuration options go here
    options: {}
  };
  const image = await canvasRenderService.renderToBuffer(configuration);

  fs.writeFileSync(`image/chart.png`, image);
})();


app.use('/static', express.static('image'));

app.listen(3000, function () {
  console.log('Export server listening on port 3000!')
});





