// activate the date range input field
$(function () {
    //Date range picker
    $('#dateRange').daterangepicker();
});

// when the refresh button is clicked
$('#refreshButton').click(function () {

    // get start and end date from date picker
    var dateRangeString = $('#dateRange').val(); // something like '09/17/2014 - 09/20/2014'
    if (dateRangeString != undefined && dateRangeString != '') {
        var dates = dateRangeString.split(' - ');
        var startDate = parseDate(dates[0]);
        var endDate = parseDate(dates[1]);

        refreshLineChart(startDate, endDate);
        refreshPieChart(startDate, endDate);
        refreshHeatMapChart(startDate, endDate);
        refreshMapChart(startDate, endDate);
    }
});

// helper function to parse a date from a string like '09/17/2014'
function parseDate(dateString) {
    var dateParts = dateString.split("/");
    return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
}

function getDaysBetween(startDate, endDate){
    return (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000) + 1;
}

// refresh the line chart data with new random data between the two given dates
function refreshLineChart(startDate, endDate) {

}

// refresh the pie chart data with new random data
function refreshPieChart(startDate, endDate) {

}

// refresh the heatmap data with new random data between the two given dates
function refreshHeatMapChart(startDate, endDate) {

}

// refresh the map data with new random data
function refreshMapChart(startDate, endDate) {

}