const numberOfEle = 10;

var generateRandomNumberArray = function () {
    var numbers = [];
    for (var i = 0; i < numberOfEle; i++) {
        numbers.push(_.random(1, 100));
    }
    return numbers;
};

var shiftOneValue = function(data){
    data.shift();
    data.push(_.random(1,100));
    return data;
};

const WIDTH = 1300;
const HEIGHT = 600;
const MARGIN = 30;

const barPadding = 100;
const barMargin = 124;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function(x, y){
    return "translate("+x+","+y+")";
};

var svg,xScale,yScale;
var data = generateRandomNumberArray();

var plotAxisAndGrid = function () {
    svg = d3.select('.container').append('svg')
        .attr('width',WIDTH)
        .attr('height',HEIGHT);

    xScale = d3.scaleLinear()
        .domain([1,numberOfEle])
        .range([0, INNER_WIDTH]);

    yScale = d3.scaleLinear()
        .domain([0,100])
        .range([INNER_HEIGHT, 0]);

    var g = svg.append('g')
        .attr('transform',  translate(MARGIN, MARGIN));

    var xAxis = d3.axisBottom(xScale).ticks(10);
    var yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append('g')
        .attr('transform', translate(MARGIN, HEIGHT - MARGIN))
        .call(xAxis)
        .classed('xAxis', true);

    svg.selectAll('.xAxis .tick')
        .append('line')
        .attr('x1', 0.5)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', -INNER_HEIGHT)
        .classed('grid', true);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .classed('yAxis', true)
        .call(yAxis);

    svg.selectAll('.yAxis .tick')
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0.5)
        .attr('x2', INNER_WIDTH)
        .attr('y2', 0)
        .classed('grid', true);
};

var loadLineChart = function () {
    d3.select('.line').remove();
    var g = svg.append('g')
        .classed('line',true)
        .attr('transform',  translate(MARGIN, MARGIN));

    var line = d3.line()
        .x(function(d,i){ return xScale(i+1)})
        .y(function(d){return yScale(d)})
        .curve(d3.curveBasis);

    var actualLine=d3.line()
        .x(function(d,i){ return xScale(i)})
        .y(function(d){return yScale(d)})
        .curve(d3.curveBasis);

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

// var loadBarChart = function () {
//     d3.select('.bar').remove();
//     var g = svg.append('g')
//         .classed('bar',true)
//         .attr('transform',  translate(MARGIN, MARGIN));
//
//
//     svg.selectAll("rect")
//         .data(data)
//         .enter()
//         .append("rect")
//         .attr("x", function(d, i) {
//             return (i+1) * barMargin;
//         })
//         .attr("y", function(d,i) {
//             console.log(d,"----------",MARGIN - d);
//             return MARGIN - d;
//         })
//         .attr("width", WIDTH / data.length - barPadding)
//         .attr("height", function(d) {return (d*54)/10})
//         .attr("fill", "teal");
//
//     data = shiftOneValue(data);
// };

window.onload = function () {
    plotAxisAndGrid();
    // loadBarChart();
    // loadLineChart();


    setInterval(function () {
        loadLineChart();
        // loadBarChart();
    },500);
};