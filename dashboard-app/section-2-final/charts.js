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
                name: 'Page Hits',
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
                    [days[00], 0, 157],
                    [days[00], 1, 151],
                    [days[00], 2, 91],
                    [days[00], 3, 79],
                    [days[00], 4, 126],

                    [days[01], 0, 297],
                    [days[01], 1, 203],
                    [days[01], 2, 176],
                    [days[01], 3, 15],
                    [days[01], 4, 235],

                    [days[02], 0, 22],
                    [days[02], 1, 111],
                    [days[02], 2, 142],
                    [days[02], 3, 22],
                    [days[02], 4, 110],

                    [days[03], 0, 71],
                    [days[03], 1, 103],
                    [days[03], 2, 19],
                    [days[03], 3, 272],
                    [days[03], 4, 150],

                    [days[04], 0, 119],
                    [days[04], 1, 226],
                    [days[04], 2, 29],
                    [days[04], 3, 292],
                    [days[04], 4, 214],

                    [days[05], 0, 182],
                    [days[05], 1, 100],
                    [days[05], 2, 48],
                    [days[05], 3, 35],
                    [days[05], 4, 176],

                    [days[06], 0, 119],
                    [days[06], 1, 57],
                    [days[06], 2, 114],
                    [days[06], 3, 82],
                    [days[06], 4, 131],

                    [days[07], 0, 276],
                    [days[07], 1, 228],
                    [days[07], 2, 92],
                    [days[07], 3, 162],
                    [days[07], 4, 292],

                    [days[08], 0, 237],
                    [days[08], 1, 225],
                    [days[08], 2, 8],
                    [days[08], 3, 45],
                    [days[08], 4, 277],

                    [days[09], 0, 226],
                    [days[09], 1, 272],
                    [days[09], 2, 275],
                    [days[09], 3, 46],
                    [days[09], 4, 190],

                    [days[10], 0, 130],
                    [days[10], 1, 3],
                    [days[10], 2, 253],
                    [days[10], 3, 113],
                    [days[10], 4, 260],

                    [days[11], 0, 111],
                    [days[11], 1, 106],
                    [days[11], 2, 115],
                    [days[11], 3, 93],
                    [days[11], 4, 29],

                    [days[12], 0, 214],
                    [days[12], 1, 197],
                    [days[12], 2, 222],
                    [days[12], 3, 209],
                    [days[12], 4, 206],

                    [days[13], 0, 204],
                    [days[13], 1, 276],
                    [days[13], 2, 232],
                    [days[13], 3, 163],
                    [days[13], 4, 104],

                    [days[14], 0, 191],
                    [days[14], 1, 85],
                    [days[14], 2, 81],
                    [days[14], 3, 219],
                    [days[14], 4, 54],

                    [days[15], 0, 207],
                    [days[15], 1, 189],
                    [days[15], 2, 33],
                    [days[15], 3, 56],
                    [days[15], 4, 222],

                    [days[16], 0, 116],
                    [days[16], 1, 62],
                    [days[16], 2, 163],
                    [days[16], 3, 255],
                    [days[16], 4, 285],

                    [days[17], 0, 195],
                    [days[17], 1, 54],
                    [days[17], 2, 208],
                    [days[17], 3, 7],
                    [days[17], 4, 20],

                    [days[18], 0, 189],
                    [days[18], 1, 273],
                    [days[18], 2, 52],
                    [days[18], 3, 56],
                    [days[18], 4, 143],

                    [days[19], 0, 292],
                    [days[19], 1, 239],
                    [days[19], 2, 200],
                    [days[19], 3, 20],
                    [days[19], 4, 20],

                    [days[20], 0, 45],
                    [days[20], 1, 268],
                    [days[20], 2, 100],
                    [days[20], 3, 266],
                    [days[20], 4, 136],

                    [days[21], 0, 277],
                    [days[21], 1, 49],
                    [days[21], 2, 13],
                    [days[21], 3, 257],
                    [days[21], 4, 90],

                    [days[22], 0, 234],
                    [days[22], 1, 61],
                    [days[22], 2, 169],
                    [days[22], 3, 233],
                    [days[22], 4, 102],

                    [days[23], 0, 299],
                    [days[23], 1, 151],
                    [days[23], 2, 58],
                    [days[23], 3, 72],
                    [days[23], 4, 78],

                    [days[24], 0, 36],
                    [days[24], 1, 260],
                    [days[24], 2, 251],
                    [days[24], 3, 217],
                    [days[24], 4, 260],

                    [days[25], 0, 104],
                    [days[25], 1, 139],
                    [days[25], 2, 239],
                    [days[25], 3, 227],
                    [days[25], 4, 119],

                    [days[26], 0, 1],
                    [days[26], 1, 24],
                    [days[26], 2, 230],
                    [days[26], 3, 107],
                    [days[26], 4, 95],

                    [days[27], 0, 184],
                    [days[27], 1, 141],
                    [days[27], 2, 53],
                    [days[27], 3, 2],
                    [days[27], 4, 208],

                    [days[28], 0, 278],
                    [days[28], 1, 259],
                    [days[28], 2, 152],
                    [days[28], 3, 178],
                    [days[28], 4, 238],

                    [days[29], 0, 17],
                    [days[29], 1, 148],
                    [days[29], 2, 276],
                    [days[29], 3, 146],
                    [days[29], 4, 167]

                ],

            }
        ]

    });


    // Initiate the chart
    $('#mapChart').highcharts('Map', {

        legend: {
            title: {
                text: 'Page Hits',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            backgroundColor: 'none',
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            padding: 0,
            pointFormat: '{point.name}: <b>{point.value}</b>',
            positioner: function () {
                return { x: 0, y: 250 };
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
        },

        series : [{
            data : getMapData(),
            mapData: Highcharts.maps['custom/world'],
            joinBy: ['iso-a2', 'code'],
            name: 'Page Hits',
            states: {
                hover: {
                    color: '#BADA55'
                }
            }
        }]
    });

});




