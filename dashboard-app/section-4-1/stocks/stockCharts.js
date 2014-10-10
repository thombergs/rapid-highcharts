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

    $.get('googl.csv', function (csvFile) {
        var data = parseCSVData(csvFile);

        // Create the chart
        $('#googleStockchart').highcharts('StockChart', {

            rangeSelector: {
                selected: 1,
                inputEnabled: $('#googleStockchart').width() > 480
            },

            navigator: {
                enabled: false
            },

            series: [
                {
                    name: 'Google',
                    data: data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        });
    });

    $.get('fb.csv', function (csvFile) {
        var data = parseCSVData(csvFile);

        // Create the chart
        $('#facebookStockchart').highcharts('StockChart', {

            rangeSelector: {
                selected: 1,
                inputEnabled: $('#facebookStockchart').width() > 480
            },

            navigator: {
                enabled: false
            },

            series: [
                {
                    name: 'Facebook',
                    data: data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        });
    });

});

function parseCSVData(csvFile) {

}






