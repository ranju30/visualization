var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var loadChart = function(){

var scale = d3.scaleLinear()
              .domain([0,10])
              .range(['italic bold 12px/30px Georgia,sans-serif', 'italic bold 120px/180px Georgia,sans-serif']);

  var table = d3.select('body').append('div');
  var tableRow = d3.select('div').append('div').attr('class','tableDiv');
  tableRow.selectAll('.tableDiv')
      .data(numbers, function(d) {
          return d;
      })
      .enter()
      .append('div')
      .text(function(d) {
          return d;
      })
      .attr('class','number')
      .style('font',function(d){return scale(d) + 'px';});

};

window.onload = loadChart;
