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
    return numbers.map(function (value) {
        return value * value;
    });
};

var getLog = function () {
    return numbers.map(function (value) {
        return Math.log(value).toFixed(3);
    });
};


var getLogRound = function () {
    return numbers.map(function (value) {
        return Math.round(Math.log10(value));
    });
};

var visualize = function() {
    var title = d3.select('.title-container').append('div').attr('class', 'titles');
    var n_number = d3.select('.number-container').append('div').attr('class', 'numbers');
    var n_square = d3.select('.n-square-container').append('div').attr('class', 'n-squares');

    var titles = title.selectAll('.titles').data(numbers);
    var n_numbers = n_number.selectAll('.numbers').data(numbers);
    var n_squares = n_square.selectAll('.n-squares').data(getSqure());

    titles.enter()
        .append("div")
        .attr("class", "title");

    d3.selectAll('.title')
        .text(function (d) {return d});

    n_numbers.enter()
        .append("div")
        .attr("class", "number");

    d3.selectAll('.number')
        .text(function (d) {return d});

    n_squares.enter()
        .append("div")
        .attr("class", "n-square");

    d3.selectAll('.n-square')
        .text(function (d) {return d});
};

window.onload = visualize;