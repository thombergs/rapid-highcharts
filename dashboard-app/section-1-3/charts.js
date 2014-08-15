$(function () {

    $(function () {
        $('#container').highcharts({
            title: {
                text: 'Page Hits with different browsers'
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

});




