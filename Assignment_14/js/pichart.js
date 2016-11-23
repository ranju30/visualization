const WIDTH = 600;
const HEIGHT = 600;
const MARGIN = 30;

const piRadius = 200;

var data = [1, 1, 2, 2, 1, 2, 1];
var color = d3.schemeCategory20;

var translate = function(x, y) {
    return 'translate(' + x + ',' + y + ')';
};

var getPieForFullCircle = function(){
  return d3.pie().sort(null)(data);
}

var getInnerRadiusForFullCircle = function(){
  return 0;
}

//--------------------------------------------------------------------------

var getPieForHalfCircle = function(){
  return d3.pie().startAngle(0).endAngle(180*(Math.PI/180)).sort(null)(data);
}

var getInnerRadiusForHalfCircle = function(){
  return 0;
}

//---------------------------------------------------------------------------

var visualize = function() {
    var pie = getPieForFullCircle();

    var arc = d3.arc()
        .innerRadius(getInnerRadiusForFullCircle())
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
