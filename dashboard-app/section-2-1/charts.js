$(function () {

    $('#browserChart').highcharts({
        title: {
            text: ''
        },
        series: [{
            type: 'pie',
            name: 'Page Hits',
            data: [
                ['IE',       98],
                ['Others',   56],
                ['Chrome', 42]
            ]
        }]
    });

});




