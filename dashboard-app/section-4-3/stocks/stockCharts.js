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
            var googleChart = Highcharts.charts[0];
            var shift = googleChart.series[0].data.length >= 10;
            googleChart.series[0].addPoint(data, true, shift);
        })

        getRealtimeData("FB", function (data) {
            var facebookChart = Highcharts.charts[1];
            var shift = facebookChart.series[0].data.length >= 10;
            facebookChart.series[0].addPoint(data, true, shift);
        })
    }, 2000);
});

function getRealtimeData(symbol, callback) {
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql?&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: 'select BidRealtime from yahoo.finance.quotes where symbol = "' + symbol + '"',
            format: "json"
        },

        success: function (response) {
            var data = [Date.now(), parseFloat(response.query.results.quote.BidRealtime)];
            callback(data);
        }
    });
}

