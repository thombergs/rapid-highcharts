$(function () {

    var theme = {
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: true
        }
    }

    Highcharts.setOptions(theme);

    $('#pageHitsChart').highcharts({

        data: {
            table: 'pageHitsTable'
        },

        chart: {
            type: 'spline'
        },

        yAxis: {
            title: {
                text: ''
            }
        }

    });

});




