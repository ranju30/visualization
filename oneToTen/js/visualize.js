var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var getRow = function(scale, name) {
    var tableRow = d3.select('tbody').append('tr');
    tableRow.append('td').text(name);
    tableRow.selectAll('td')
        .data(numbers, function(d) {
            return d;
        })
        .enter()
        .append('td')
        .text(function(d) {
            return scale(d);
        });
};

var linearScale = d3.scaleLinear();
var square = d3.scalePow().exponent(2);
var log = function(d) {
    return d3.scaleLog()(d).toFixed(4);
};
var logRounded = d3.scaleLog().rangeRound([0, 1]);

var loadChart = function() {
    var table = d3.select('body').append('table');
    table.append('tbody');
    getRow(linearScale, 'Title');
    getRow(linearScale, 'n');
    getRow(square, 'n square');
    getRow(log, 'log(n)');
    getRow(logRounded, 'log(n) rounded');
};

window.onload = loadChart;
