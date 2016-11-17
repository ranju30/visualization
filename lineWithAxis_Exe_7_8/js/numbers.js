const WIDTH = 1280;
const HEIGHT = 800;
const MARGIN = 30;

const SCALERANGE = 500;

var pointValues = [
                   {x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7},
                   {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4},
                   {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}
                 ];

var xScale = d3.scaleLinear()
    .domain([0 / 10, 10 / 10])
    .range([1, SCALERANGE]);

var yScale = d3.scaleLinear()
    .domain([10 / 10, 0 / 10])
    .range([1, SCALERANGE]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

var visualize = function() {
    var svg = d3.select('.container').append('svg')
        .attr('height', HEIGHT + MARGIN)
        .attr('width', WIDTH + MARGIN);

    svg.append('g')
        .attr('transform', translate(MARGIN, SCALERANGE + MARGIN))
        .call(xAxis);

    svg.append('g')
        .attr('transform', translate(MARGIN + 1, MARGIN))
        .call(yAxis);
};

window.onload = visualize;
