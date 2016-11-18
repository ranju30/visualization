const WIDTH = 1280;
const HEIGHT = 600;
const MARGIN = 30;

const SCALERANGE = 500;

var data = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7},{x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4},{x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}];

var getSinValue = function(limit) {
    var storage = [];
    for (var index = 0; index < limit; index++) {
        storage.push(Math.sin(index));
    }
    return storage;
}

var curveArray = [
    {"d3Curve": d3.curveLinear},
    {"d3Curve": d3.curveLinearClosed},
    {"d3Curve": d3.curveStepAfter},
    {"d3Curve": d3.curveBasis},
    {"d3Curve": d3.curveBundle},
    {"d3Curve": d3.curveCardinalClosed},
    {"d3Curve": d3.curveCardinal},
    {"d3Curve": d3.curveCatmullRom}
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

        var line = d3.line()
            .x(function(d) {
                return xScale(d.x / 10)
            })
            .y(function(d) {
                return yScale(d.y / 10)
            })
            .curve(curveType.d3Curve);

        var sinLine = d3.line()
            .x(function(d, i) {
                return xScale(i / 10);
            })
            .y(function(d, i) {
                return yScale(d / 10 + 0.5);
            })
            .curve(curveType.d3Curve);

    var g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    g.append("path")
        .attr('class', 'line')
        .attr("d", line(data));

    g.append("path")
        .attr('class', 'sinLine')
        .attr("d", sinLine(getSinValue(10)));

    g.selectAll('circle').data(data, function(d, i) {
            return d;
        })
        .enter().append('circle')
        .attr('r', 5)
        .attr('class', 'lineCircle');

    g.selectAll('.lineCircle').attr('cx', function(d) {
            return xScale(d.x / 10)
        })
        .attr('cy', function(d) {
            return yScale(d.y / 10)
        });

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
            return yScale(d / 10 + 0.5)
        });

};

window.onload = loadChart;
