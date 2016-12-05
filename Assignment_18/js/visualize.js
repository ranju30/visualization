const WIDTH = 1500;
const HEIGHT = 500;
const MARGIN = 40;
const INNER_WIDTH = WIDTH - (2 * MARGIN);
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);
const CENTER_OF_CIRCLE = 250;

const id = ["min", "max", "extent", "sum", "mean", "median", "quantile", "variance", "deviation"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const idValueMap = {
    min: [d3.min(numbers)],
    max: [d3.max(numbers)],
    extent: d3.extent(numbers),
    sum: [d3.sum(numbers) / 5],
    mean: [d3.mean(numbers)],
    median: [d3.median(numbers)],
    quantile: [d3.quantile(numbers, .75)],
    variance: [d3.variance(numbers)],
    deviation: [d3.deviation(numbers)]
}
var svg;
var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
};

var getValue = function(id) {
    return idValueMap[id];
}

var showCircles = function(data) {
    d3.selectAll('.glow').classed('glow', false);
    var selected = d3.select('svg').selectAll('circle')
        .data(data, function(d) {
            return d;
        });

    selected.classed('glow', true);

    selected.enter()
        .append('circle')
        .attr('cx', CENTER_OF_CIRCLE)
        .attr('cy', CENTER_OF_CIRCLE)
        .attr('r', function(d) {
            return d * 20
        })
        .attr('class', function(d) {
            if (numbers.includes(d)) return 'circles';
            return 'circles glow';
        })
}

var getValueAndShowData = function(key) {
    var value = getValue(key);
    showCircles(value);
}

var loadChart = function() {
    svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT)
        .attr('transform', translate(MARGIN, INNER_WIDTH));


    showCircles(numbers);

    d3.select('#min').on('click', function() {
        getValueAndShowData('min')
    });
    d3.select('#max').on('click', function() {
        getValueAndShowData('max')
    });
    d3.select('#extent').on('click', function() {
        getValueAndShowData('extent')
    });
    d3.select('#sum').on('click', function() {
        getValueAndShowData('sum')
    });
    d3.select('#mean').on('click', function() {
        getValueAndShowData('mean')
    });
    d3.select('#median').on('click', function() {
        getValueAndShowData('median')
    });
    d3.select('#quantile').on('click', function() {
        getValueAndShowData('quantile')
    });
    d3.select('#variance').on('click', function() {
        getValueAndShowData('variance')
    });
    d3.select('#deviation').on('click', function() {
        getValueAndShowData('deviation')
    });

};

window.onload = loadChart;
