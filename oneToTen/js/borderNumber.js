var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var loadChart = function(){
  var table = d3.select('body').append('table');
  table.append('tbody');
  var tableRow = d3.select('tbody').append('tr');
  tableRow.selectAll('td')
      .data(numbers, function(d) {
          return d;
      })
      .enter()
      .append('td')
      .text(function(d) {
          return d;
      })
      .style('font-size',function(d,i){return 10.91*(i+1)+'px';});

};

window.onload = loadChart;
