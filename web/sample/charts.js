$(function () {

    $('#websiteHitsChart').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Hits'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Website Hits',
            pointInterval: 24 * 60 * 60 * 1000, // 1 day
            pointStart: Date.now() - (24 * 60 * 60 * 1000 * 30), // 30 days ago
            data:  [5,9,6,20,23,15,8,7,35,30,40,34,27,23,13,50,44,34,36,30,28,26,20,37,43,52,55,60,66,55]
        }],
        credits: {
            enabled: false
        }
    });

    $('#browserChart').highcharts({
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45],
                ['IE',       20],
                ['Chrome',   25],
                ['Safari',    5],
                ['Opera',     3],
                ['Others',   2]
            ]
        }],
        credits: {
            enabled: false
        }
    });

    $('#topPagesChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['/home','/login', '/stats', '/admin/editUser', '/admin/createUser', '/subscribe', '/news', '/news/article4711', '/news/article0815', '/newsfeed'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Page Hits',
            data: [155, 130, 125, 103, 86, 56, 54, 46, 38, 25]
        }]
    });
});




