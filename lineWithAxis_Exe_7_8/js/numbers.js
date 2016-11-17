const WIDTH = 1280;
const HEIGHT = 600;
const MARGIN = 30;

const SCALERANGE = 500;

var data = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7},{x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4},{x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}];

var getSinValue = function(limit){
  var storage = [];
  for(var index = 0; index<limit; index++){
    storage.push(Math.sin(index));
  }
    return storage;
}

var xScale = d3.scaleLinear()
    .domain([0,1])
    .range([0, SCALERANGE]);

var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([SCALERANGE, 0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

var line = d3.line()
    .x(function(d) {
        return xScale(d.x/10)
    })
    .y(function(d) {
        return yScale(d.y/10)
    });

var sinLine = d3.line()
    .x(function(d,i) {
        return xScale(i/10);
    })
    .y(function(d, i) {
        return yScale(d/10 + 0.5);
    })

var visualize = function() {
    var svg = d3.select('.container').append('svg')
        .attr('height', HEIGHT)
        .attr('width', WIDTH);

    svg.append('g')
        .attr('transform', translate(MARGIN, SCALERANGE + MARGIN))
        .call(xAxis);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .call(yAxis);

    var gLine = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    gLine.append("path")
        .attr('class', 'line')
        .attr("d", line(data));

    var gSin = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    gSin.append("path")
        .attr('class', 'line')
        .attr("d", sinLine(getSinValue(10)));
};

window.onload = visualize;
