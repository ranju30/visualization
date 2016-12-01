const WIDTH = 1500;
const HEIGHT = 500;
const MARGIN = 40;
const INNER_WIDTH = WIDTH - (2 * MARGIN);
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);
const CENTER_OF_CIRCLE = 250;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var svg;
var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
};

var replaceCircle = function (index,value) {
  svg.select('.circle' + (index + 1))
      .attr('cx', CENTER_OF_CIRCLE)
      .attr('cy', CENTER_OF_CIRCLE)
      .attr('r', value * 20)
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', 2)
}

var showMin = function() {
    var min = d3.min(numbers);
    var index = numbers.indexOf(min);
    replaceCircle(index,min);
};

var showMax = function() {
    var max = d3.max(numbers);
    var index = numbers.indexOf(max);
    replaceCircle(index,max);
};

var showExtent = function() {
    var extent = d3.extent(numbers);
    var index = numbers.indexOf(extent);
    replaceCircle(index,extent);
};

var loadChart = function() {
    svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT)
        .attr('transform', translate(MARGIN, INNER_WIDTH));

    svg.selectAll('circle')
        .data(numbers, function(d) {
            return d;
        })
        .enter()
        .append('circle')
        .attr('cx', CENTER_OF_CIRCLE)
        .attr('cy', CENTER_OF_CIRCLE)
        .attr('r', function(d) {
            return d * 20
        })
        .attr('class', function(d, i) {
            return 'circle' + (i + 1)
        })
        .style('fill', 'none')
        .style('stroke', 'steelblue')
        .style('stroke-width', 1)
};

window.onload = loadChart;
