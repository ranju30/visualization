const padding = 50,
    size = 100,
    border_radious = 10;
var svg;
var svgShape = function(svgSize) {
    return d3.select('.container').append('svg')
        .attr('height', svgSize)
        .attr('width', svgSize)
        .style('padding', padding / 2);
};

var translate = function(index) {
    return 'translate(' + ((size * index) + (padding * index)) + ',0)';
}

var createLine = function(index) {
    svg.append('line')
        .attr('x1', 0)
        .attr('x2', size)
        .attr('y1', size)
        .attr('y2', 0)
        .attr('transform', translate(index));
};

var createCircle = function(index) {
    svg.append('circle')
        .attr('cx', size / 2)
        .attr('cy', size / 2)
        .attr('r', size / 2)
        .attr('transform', translate(index));
};

var createRect = function(index) {
    svg.append('rect')
        .attr('width', size)
        .attr('height', size)
        .attr('rx', border_radious)
        .attr('ry', border_radious)
        .attr('transform', translate(index));
}

var createTriangle = function(index) {
    svg.append('polygon')
        .attr('points', size / 2 + ',0 0,' + size + ' ' + size + ',' + size)
        .attr('transform', translate(index));
};

var visualize = function() {
    const showTable = [createLine, createCircle, createRect, createTriangle];
    svg = svgShape((size + padding) * showTable.length);
    showTable.forEach(function(createShape, index) {
        createShape(index);
    });
}

window.onload = visualize;
