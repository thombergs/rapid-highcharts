$(function () {

    $('#pageHitsChart').highcharts({
        chart: {
            type: 'line'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            },

        },
        legend: {
            enabled: false,
        },
        series: [
            {
                pointInterval: 24 * 60 * 60 * 1000,
                pointStart: Date.now() - 29 * 24 * 60 * 60 * 1000,
                name: 'Page Hits',
                data: [5, 9, 6, 20, 23, 15, 8, 7, 35, 30,
                    40, 34, 27, 23, 13, 50, 44, 34, 36,
                    30, 28, 26, 20, 37, 43, 52, 55, 60, 66, 55]
            }
        ]
    });

});