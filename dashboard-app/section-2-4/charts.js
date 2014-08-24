$(function () {

    var theme = {
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }
    }

    Highcharts.setOptions(theme);

    $('#browserChart').highcharts({
        series: [
            {
                type: 'pie',
                name: 'Page Hits',
                data: [
                    ['IE', 98],
                    ['Others', 56],
                    ['Chrome', 42]
                ]
            }
        ]
    });

    $('#pageHitsChart').highcharts({
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
                name: 'Tokyo',
                data: [5, 9, 6, 20, 23, 15, 8, 7, 35, 30,
                    40, 34, 27, 23, 13, 50, 44, 34, 36,
                    30, 28, 26, 20, 37, 43, 52, 55, 60, 66, 55]
            }
        ]
    });

    var now = Date.now();
    var days = [];
    for (i = 29; i >= 0; i--) {
        days.push(now - i * 24 * 60 * 60 * 1000);
    }

    $('#heatmapChart').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 40
        },

        xAxis: {
            type: 'datetime',
        },

        yAxis: {
            categories: [
                '/home',
                '/login',
                '/register',
                '/news',
                '/logout'
            ],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.yAxis.categories[this.point.y] + '</b> was hit <br/>' +
                    '<b>' + this.point.value + '</b> times<br/>' +
                    'on <b>' + new Date(this.point.x).toLocaleDateString() + '<b/>';
            }
        },

        series: [
            {
                colsize: 24 * 60 * 60 * 1000,
                borderWidth: 1,
                data: [
                    [days[0], 0, 10],
                    [days[0], 1, 19],
                    [days[0], 2, 8],
                    [days[0], 3, 24],
                    [days[0], 4, 67],

                    [days[1], 0, 20],
                    [days[1], 1, 29],
                    [days[1], 2, 28],
                    [days[1], 3, 224],
                    [days[1], 4, 267],

                    [days[2], 0, 20],
                    [days[2], 1, 29],
                    [days[2], 2, 28],
                    [days[2], 3, 224],
                    [days[2], 4, 267],

                    [days[2], 0, 20],
                    [days[2], 1, 29],
                    [days[2], 2, 28],
                    [days[2], 3, 224],
                    [days[2], 4, 267],

                    [days[3], 0, 20],
                    [days[3], 1, 29],
                    [days[3], 2, 28],
                    [days[3], 3, 224],
                    [days[3], 4, 267],

                    [days[4], 0, 20],
                    [days[4], 1, 29],
                    [days[4], 2, 28],
                    [days[4], 3, 224],
                    [days[4], 4, 267],

                    [days[5], 0, 20],
                    [days[5], 1, 29],
                    [days[5], 2, 28],
                    [days[5], 3, 224],
                    [days[5], 4, 267],

                    [days[6], 0, 20],
                    [days[6], 1, 29],
                    [days[6], 2, 28],
                    [days[6], 3, 224],
                    [days[6], 4, 267],

                    [days[7], 0, 20],
                    [days[7], 1, 29],
                    [days[7], 2, 28],
                    [days[7], 3, 224],
                    [days[7], 4, 267],

                    [days[8], 0, 20],
                    [days[8], 1, 29],
                    [days[8], 2, 28],
                    [days[8], 3, 224],
                    [days[8], 4, 267],

                    [days[9], 0, 20],
                    [days[9], 1, 29],
                    [days[9], 2, 28],
                    [days[9], 3, 224],
                    [days[9], 4, 267],

                    [days[10], 0, 10],
                    [days[10], 1, 19],
                    [days[10], 2, 8],
                    [days[10], 3, 24],
                    [days[10], 4, 67],

                    [days[11], 0, 20],
                    [days[11], 1, 29],
                    [days[11], 2, 28],
                    [days[11], 3, 224],
                    [days[11], 4, 267],

                    [days[12], 0, 20],
                    [days[12], 1, 29],
                    [days[12], 2, 28],
                    [days[12], 3, 224],
                    [days[12], 4, 267],

                    [days[12], 0, 20],
                    [days[12], 1, 29],
                    [days[12], 2, 28],
                    [days[12], 3, 224],
                    [days[12], 4, 267],

                    [days[13], 0, 20],
                    [days[13], 1, 29],
                    [days[13], 2, 28],
                    [days[13], 3, 224],
                    [days[13], 4, 267],

                    [days[14], 0, 20],
                    [days[14], 1, 29],
                    [days[14], 2, 28],
                    [days[14], 3, 224],
                    [days[14], 4, 267],

                    [days[15], 0, 20],
                    [days[15], 1, 29],
                    [days[15], 2, 28],
                    [days[15], 3, 224],
                    [days[15], 4, 267],

                    [days[16], 0, 20],
                    [days[16], 1, 29],
                    [days[16], 2, 28],
                    [days[16], 3, 224],
                    [days[16], 4, 267],

                    [days[17], 0, 20],
                    [days[17], 1, 29],
                    [days[17], 2, 28],
                    [days[17], 3, 224],
                    [days[17], 4, 267],

                    [days[18], 0, 20],
                    [days[18], 1, 29],
                    [days[18], 2, 28],
                    [days[18], 3, 224],
                    [days[18], 4, 267],

                    [days[19], 0, 20],
                    [days[19], 1, 29],
                    [days[19], 2, 28],
                    [days[19], 3, 224],
                    [days[19], 4, 267],

                    [days[20], 0, 10],
                    [days[20], 1, 19],
                    [days[20], 2, 8],
                    [days[20], 3, 24],
                    [days[20], 4, 67],

                    [days[21], 0, 20],
                    [days[21], 1, 29],
                    [days[21], 2, 28],
                    [days[21], 3, 224],
                    [days[21], 4, 267],

                    [days[22], 0, 20],
                    [days[22], 1, 29],
                    [days[22], 2, 28],
                    [days[22], 3, 224],
                    [days[22], 4, 267],

                    [days[22], 0, 20],
                    [days[22], 1, 29],
                    [days[22], 2, 28],
                    [days[22], 3, 224],
                    [days[22], 4, 267],

                    [days[23], 0, 20],
                    [days[23], 1, 29],
                    [days[23], 2, 28],
                    [days[23], 3, 224],
                    [days[23], 4, 267],

                    [days[24], 0, 20],
                    [days[24], 1, 29],
                    [days[24], 2, 28],
                    [days[24], 3, 224],
                    [days[24], 4, 267],

                    [days[25], 0, 20],
                    [days[25], 1, 29],
                    [days[25], 2, 28],
                    [days[25], 3, 224],
                    [days[25], 4, 267],

                    [days[26], 0, 20],
                    [days[26], 1, 29],
                    [days[26], 2, 28],
                    [days[26], 3, 224],
                    [days[26], 4, 267],

                    [days[27], 0, 20],
                    [days[27], 1, 29],
                    [days[27], 2, 28],
                    [days[27], 3, 224],
                    [days[27], 4, 267],

                    [days[28], 0, 20],
                    [days[28], 1, 29],
                    [days[28], 2, 28],
                    [days[28], 3, 224],
                    [days[28], 4, 267],

                    [days[29], 0, 20],
                    [days[29], 1, 29],
                    [days[29], 2, 28],
                    [days[29], 3, 224],
                    [days[29], 4, 267],

                ],

            }
        ]

    });

});




