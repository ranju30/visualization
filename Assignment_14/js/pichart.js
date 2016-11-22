const WIDTH = 600;
const HEIGHT = 600;
const MARGIN = 30;

const piRadius = 200;

var data = [1, 1, 2, 2, 1, 2, 1];
var color = d3.schemeCategory20;

var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
};

var visualize = function(curveType) {
    var pie = d3.pie().sort(null)(data);

    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(piRadius);

    var svg = d3.select('.container').append('svg')
        .attr('height', HEIGHT)
        .attr('width', WIDTH)
        .append('g')
        .attr('transform', translate(HEIGHT/2, WIDTH/2));

    var g = svg.selectAll('g')
        .data(pie)
        .enter();

        g.append('path')
        .attr('d',arc)
        .style('fill',function(d,i){return color[i]})

};

window.onload = visualize;
