const MIN_VALUE = 1;
const MAX_VALUE = 10;

var numbers = function () {
    var number = [];
    for (var i=MIN_VALUE;i<=MAX_VALUE;i++){
        number.push(i);
    }
    return number;
}();

var getSqure = function () {
    var allNumber = numbers.map(function (value) {
        return value*value;
    });
    return allNumber;
};

var getLog = function () {
    var allNumber = numbers.map(function (value) {
        return Math.log(value).toFixed(3);
    });
    return allNumber;
};


var getLogRound = function () {
    var allNumber = numbers.map(function (value) {
        return Math.round(Math.log10(value));
    });
    return allNumber;
};

var visualize = function() {
    var title = d3.select('.title-container').append('div').attr('class', 'titles');
    var titles = title.selectAll('.titles').data(numbers);

    titles.enter()
        .append("div")
        .attr("class", "title");

    d3.selectAll('.title')
        .text(function (d) {return d});
};

window.onload = visualize;