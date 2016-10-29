var students = [
    {name: 'ramesh', subject: 'maths', score: 87},
    {name: 'suresh', subject: 'maths', score: 45},
    {name: 'pokemon', subject: 'english', score: 65},
    {name: 'mary', subject: 'kannada', score: 44},
    {name: 'riya', subject: 'science', score: 72},
    {name: 'katie', subject: 'social studies', score: 82},
    {name: 'katie', subject: 'maths', score: 98},
    {name: 'ramesh', subject: 'bengali', score: 25},
    {name: 'suresh', subject: 'science', score: 55},
    {name: 'riya', subject: 'tamil', score: 75},
    {name: 'pokemon', subject: 'sports', score: 95},
    {name: 'pokemon', subject: 'social studies', score: 32}
];

var color = {};
color['maths'] = '#2d5faf';
color['english'] = '#ff8c00';
color['kannada'] = '#04a50a';
color['science'] = '#f70404';
color['social studies'] = '#96046d';
color['bengali'] = '#565042';
color['tamil'] = '#b48bc1';
color['sports'] = '#888988';

var loadChart = function (data) {
    var container = d3.select(".sequence-load").append('div').attr('class', 'bars');
    var bars = container.selectAll('.bars').data(data);

    bars.enter()
        .append("div")
        .attr("class", "bar");

    d3.selectAll('.bar')
        .style('width', function (d) {
            return (d.score * 10) + 'px';
        })
        .style('background-color', function (d) {
            return color[d.subject];
        })
        .text(function (d) {
            return d.name + " " + d.score;
        });
};

var sortData = function (sortBy) {
    d3.selectAll('.bar').sort(function (a, b) {
        return d3.ascending(a[sortBy], b[sortBy]);
    });
};

var loadNameSortedChart = function () {
    sortData('name');
};

var loadSubjectSortedChart = function () {
  sortData('subject');
};

var loadScoreSortedChart = function () {
    sortData('score');
};


window.onload = function () {
    loadChart(students);
};