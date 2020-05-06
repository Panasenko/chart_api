const { CanvasRenderService } = require('chartjs-node-canvas');
const File = require('./files.class')

class Builder {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.canvasRenderService = new CanvasRenderService(this.width, this.height, this.chartCallback);
    }

    chartCallback(ChartJS){
        ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
        ChartJS.defaults.global.legend.position = 'bottom';
    }

    async buildChart(){

        const configuration = {
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['2013-02-08', '2013-02-09', '2013-02-10', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14'],
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
            options: {
                title: {
                    display: true,
                    text: 'Динаміка зміни курсів валют'
                },
                scales: {
                    xAxes:  [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MM D'
                            }
                        }
                    }]
                }
            }
        };

         return await File.saveFile(await this.canvasRenderService.renderToBuffer(configuration), configuration.type, 'png')

    }





}

module.exports = Builder