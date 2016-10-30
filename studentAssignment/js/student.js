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

function getUniqueSubject() {
    return _.uniq(_.map(students,'subject'));
}
var getColor = function (subject) {
    return d3.schemeCategory10[getUniqueSubject().indexOf(subject)];
};

var loadChart = function () {
    var container = d3.select(".sequence-load").append('div').attr('class', 'bars');
    var legends = d3.select(".legends").append('div').attr('class','subjects');

    var bars = container.selectAll('.bars').data(students);
    var subjectLegends = legends.selectAll('.subjects').data(getUniqueSubject());

    bars.enter()
        .append("div")
        .attr("class", "bar");

    subjectLegends.enter()
        .append('div')
        .attr('class','subject');

    d3.selectAll('.bar')
        .style('width', function (d) {return (d.score * 5) + 'px';})
        .style('background-color', function (d) {return getColor(d.subject)})
        .text(function (d) {return d.name + " " + d.score;});


    d3.selectAll('.subject')
        .style('background-color', function (d) {return getColor(d);})
        .text(function (d) {return d;});
};

var loadChartSortedBy = function (key) {
    d3.selectAll('.bar').sort(function (a, b) {
        return d3.ascending(a[key], b[key]);
    });
};

window.onload = function () {
    loadChart();
};