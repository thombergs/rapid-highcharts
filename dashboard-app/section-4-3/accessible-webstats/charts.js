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




