const numberOfEle = 100;

var generateRandomNumberArray = function () {
    var numbers = [];
    for (var i = 0; i < numberOfEle; i++) {
        numbers.push(_.random(1, 100));
    }
    return numbers;
};


const WIDTH = 1300;
const HEIGHT = 600;
const MARGIN = 30;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT/5 - 2 * MARGIN;

var translate = function(x, y){
    return "translate("+x+","+y+")";
};

var svg,xScale,yScale;
var data = generateRandomNumberArray();

var plotAxisAndGrid = function () {
    svg = d3.select('.container').append('svg')
        .attr('width',WIDTH/2)
        .attr('height',HEIGHT/5);

    xScale = d3.scaleLinear()
        .domain([1,numberOfEle])
        .range([0, INNER_WIDTH]);

    yScale = d3.scaleLinear()
        .domain([0,100])
        .range([INNER_HEIGHT, 0]);

};

var loadLineChart = function () {
    d3.select('.line').remove();
    var g = svg.append('g')
        .classed('line',true)
        .attr('transform',  translate(MARGIN, MARGIN));

    var line = d3.line()
        .x(function(d,i){ return xScale(i+1)})
        .y(function(d){return yScale(d)});

    var actualLine=d3.line()
        .x(function(d,i){ return xScale(i)})
        .y(function(d){return yScale(d)});

    data.push(_.random(1,100));

    g.append('path')
        .classed('line-chart', true)
        .attr('d', line(data))
        .transition()
        .ease(d3.easeLinear)
        .duration(500)
        .attr('d', actualLine(data));

    data.shift();
};

var loadBarChart = function (svg) {
    d3.select('.bar').remove();
    var g = svg.append('g')
        .classed('bar',true)
        .attr('transform',  translate(MARGIN, MARGIN));
};

window.onload = function () {
    var lineSVG = plotAxisAndGrid("line-container");
    var barSVG = plotAxisAndGrid("bar-container");

    setInterval(function () {
        loadLineChart(lineSVG);
        loadBarChart(barSVG);
    },500);
};