const { CanvasRenderService } = require('chartjs-node-canvas');
const File = require('./files.class')

class Builder {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.canvasRenderService = new CanvasRenderService(this.width, this.height, this.chartCallback);
    }

    chartCallback(ChartJS){
        // Global config example: https://www.chartjs.org/docs/latest/configuration/
        ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
        // Global plugin example: https://www.chartjs.org/docs/latest/developers/plugins.html
        ChartJS.plugins.register({
            // plugin implementation
        });
        // New chart type example: https://www.chartjs.org/docs/latest/developers/charts.html
        ChartJS.controllers.MyType = ChartJS.DatasetController.extend({
            // chart implementation
        })
    }

    async buildChart(){

        const configuration = {
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


         return await File.saveFile(await this.canvasRenderService.renderToBuffer(configuration), configuration.type, 'png')

    }



}

module.exports = Builder