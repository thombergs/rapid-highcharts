$(function () {

    var drilldownSeries = [];

    for (day = 29; day >= 0; day--) {
        // the start date should be <i> days ago at midnight
        var startDate = new Date(Date.now() - day * 24 * 60 * 60 * 1000);
        startDate.setHours(2, 0, 0, 0); // warum +2 Stunden?

        // create 24 random numbers between 1 and 50, one for each hour in the day
        var data = [];
        for (hour = 0; hour < 24; hour++) {
            data.push(Math.floor((Math.random() * 50) + 1));
        }

        // create the series object as a drilldown target
        var series = {
            id: day.toString(),
            pointInterval: 60 * 60 * 1000,
            pointStart: startDate.getTime(),
            name: 'Page Hits',
            data: data
        }
        drilldownSeries.push(series);
    }

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
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                id: 'mainSeries',
                pointInterval: 24 * 60 * 60 * 1000,
                pointStart: Date.now() - 29 * 24 * 60 * 60 * 1000,
                name: 'Page Hits',
                data: [
                    {drilldown: '29', y: 5},
                    {drilldown: '28', y: 9},
                    {drilldown: '27', y: 6},
                    {drilldown: '26', y: 20},
                    {drilldown: '25', y: 23},
                    {drilldown: '24', y: 15},
                    {drilldown: '23', y: 8},
                    {drilldown: '22', y: 7},
                    {drilldown: '21', y: 35},
                    {drilldown: '20', y: 30},
                    {drilldown: '19', y: 40},
                    {drilldown: '18', y: 34},
                    {drilldown: '17', y: 27},
                    {drilldown: '16', y: 23},
                    {drilldown: '15', y: 13},
                    {drilldown: '14', y: 50},
                    {drilldown: '13', y: 44},
                    {drilldown: '12', y: 34},
                    {drilldown: '11', y: 36},
                    {drilldown: '10', y: 30},
                    {drilldown: '9', y: 28},
                    {drilldown: '8', y: 26},
                    {drilldown: '7', y: 20},
                    {drilldown: '6', y: 37},
                    {drilldown: '5', y: 43},
                    {drilldown: '4', y: 52},
                    {drilldown: '3', y: 55},
                    {drilldown: '2', y: 60},
                    {drilldown: '1', y: 66},
                    {drilldown: '0', y: 55}
                ]
            }
        ],
        drilldown: {
            series: drilldownSeries
        }
    });

});