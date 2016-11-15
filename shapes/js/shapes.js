const padding = 50,
    size = 100,
    border_radious = 10;
var shapeSvg = function() {
    return d3.select('.container').append('svg')
        .attr('height', size)
        .attr('width', size)
        .style('padding', padding / 2);
};

var createLine = function() {
    var svg = shapeSvg();
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', size)
        .attr('y1', size)
        .attr('y2', 0);
};

var createCircle = function() {
    var svg = shapeSvg();
    svg.append('circle')
        .attr('cx', padding)
        .attr('cy', padding)
        .attr('r', size / 2);
};

var createRect = function() {
    var svg = shapeSvg();
    svg.append('rect')
        .attr('width', size)
        .attr('height', size)
        .attr('rx', border_radious)
        .attr('ry', border_radious);
}

var createTriangle = function() {
    var svg = shapeSvg();

    svg.append('polygon')
        .attr('points', padding + ',0 0,' + size + ' ' + size + ',' + size)
}

var visualize = function() {
    createLine();
    createCircle();
    createRect();
    createTriangle();
}

window.onload = visualize;
