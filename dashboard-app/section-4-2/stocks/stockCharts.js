$(function () {

    var theme = {
        chart: {
            height: 200
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
    }

    Highcharts.setOptions(theme);

    // Create the chart
    $('#googleStockchart').highcharts({

        chart: {
            type: 'line'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: ''
        },

        legend: {
            enabled: false
        },

        series: [
            {
                name: 'Google',
                data: [],
                tooltip: {
                    valueDecimals: 2
                }
            }
        ]
    });

    // Create the chart
    $('#facebookStockchart').highcharts({

        chart: {
            type: 'line'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: ''
        },

        legend: {
            enabled: false
        },

        series: [
            {
                name: 'Facebook',
                data: [],
                tooltip: {
                    valueDecimals: 2
                }
            }
        ]
    });


    // load new data from internet source and update the charts every 2 seconds
    setInterval(function () {
        getRealtimeData("GOOGL", function (data) {
           // load current stock value
           // add current stock value to chart
        })

        getRealtimeData("FB", function (data) {
            // load current stock value
            // add current stock value to chart
        })
    }, 2000);
});

function getRealtimeData(symbol, callback) {
    // load current stock value for the given symbol
}

