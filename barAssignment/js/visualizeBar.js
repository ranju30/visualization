const numberOfEle = 10;

var generateRandomNumberArray = function () {
    var numbers = [];
    for (var i = 0; i < numberOfEle; i++) {
        numbers.push(_.random(1, 100));
    }
    return numbers;
};

var data = generateRandomNumberArray();

var blueColorScale = d3.scaleLinear()
                        .domain([0,numberOfEle])
                        .range(["#A7B6FF","#012BF9"]);

var loadChart = function () {
    var container = d3.select(".bar-container").append('div').attr('class','bars');

    var bars = container.selectAll('.bars').data(data);

    bars.enter()
        .append("div")
        .attr("class", "bar");

    d3.selectAll('.bar')
        .style('width',function (d) { return (d*10)+'px';})
        .style('background-color',function(d,i){return blueColorScale(d/numberOfEle)})
        .text(function (d) {return d;});

};

var updateChart = function () {
    data.shift();
    data.push(_.random(0,100));
    var selectedBar = d3.selectAll('.bar').data(data);
    selectedBar.style('width',function (d) { return (d*10)+'px';})
        .text(function (d) {return d;});

    selectedBar.exit().remove();
};

window.onload = function () {
    loadChart();
    setInterval(function () {
        updateChart();
    },1000);
};