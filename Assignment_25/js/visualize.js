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

var showCircles = function(data){
  var selected = d3.select('svg').selectAll('circle')
      .data(data, function(d) {
          return d;
      });

selected.classed('glow',true);

  selected.enter()
  .append('circle')
  .attr('cx', CENTER_OF_CIRCLE)
  .attr('cy', CENTER_OF_CIRCLE)
  .attr('r', function(d) {
      return d * 20
  })
  .classed('adeyaad',true);
}

var loadChart = function() {
    svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT)
        .attr('transform', translate(MARGIN, INNER_WIDTH));

   showCircles(numbers);

   d3.select('#min').on('click',function(){
     var min = [d3.min(numbers)];
     console.log(min);
        showCircles(min);
  });
};

window.onload = loadChart;
