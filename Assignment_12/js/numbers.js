const WIDTH = 1280;
const HEIGHT = 600;
const MARGIN = 30;

const SCALERANGE = 500;

var getSinValue = function(limit) {
    var storage = [];
    for (var index = 0; index <= limit; index++) {
        storage.push((3 * Math.sin(index) + 5));
    }
    return storage;
}

var curveArray = [
    {"d3Curve": d3.curveLinearClosed},
    {"d3Curve": d3.curveStepAfter},
    {"d3Curve": d3.curveBasisOpen},
    {"d3Curve": d3.curveCardinalClosed},
    {"d3Curve": d3.curveBasis}
];

var loadChart = function () {
    curveArray.forEach(function (eachCurve) {
        visualize(eachCurve);
    });
};

var xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, SCALERANGE]);

var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([SCALERANGE, 0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

var visualize = function(curveType) {
    var svg = d3.select('.container').append('svg')
        .attr('height', HEIGHT)
        .attr('width', WIDTH);

    svg.append('g')
        .attr('transform', translate(MARGIN, SCALERANGE + MARGIN))
        .call(xAxis);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .call(yAxis);

    var sinLine = d3.line()
        .x(function(d, i) {
            return xScale(i / 10);
        })
        .y(function(d, i) {
            return yScale(d / 10);
        })
        .curve(curveType.d3Curve);

    var area = d3.area()
        .x(function(d, i) {
            return xScale(i / 10)
        })
        .y0(SCALERANGE)
        .y1(function(d, i) {
            return yScale(d / 10)
        })
        .curve(curveType.d3Curve);

    var g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    g.append("path")
        .attr('class', 'sinLine')
        .attr("d", sinLine(getSinValue(10)));

    g.selectAll('circle').data(getSinValue(10), function(d, i) {
            return d;
        })
        .enter().append('circle')
        .attr('r', 5)
        .attr('class', 'sinCircle');

    g.selectAll('.sinCircle')
        .attr('cx', function(d, i) {
            return xScale(i / 10)
        })
        .attr('cy', function(d, i) {
            return yScale(d / 10)
        });

    g.append("path")
        .attr('class', 'area')
        .attr("d", area(getSinValue(10)));

};

window.onload = loadChart;
