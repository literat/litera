$(function() {
$('.chart').easyPieChart({
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    },
    barColor: '#44BCDD'
});
var chart = window.chart = $('.chart').data('easyPieChart');
});