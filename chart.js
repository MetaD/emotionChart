function num2time(num) {
    // convert numbers to reasonable time
    if (num === 0) {
        return 0;
    }
    if (num < 2) {
        return num + ' sec';
    }
    switch (num) {
        case 2: return '2 sec';
        case 3: return '7 sec';
        case 4: return '20 sec';
        case 5: return '1 min';
        case 6: return '2 min';
        case 7: return '7 min';
        case 8: return '20 min';
        case 9: return '1 hr';
        case 10: return '2 hr';
        case 11: return '7 hr';
        case 12: return '20 hr';
        case 13: return '2 day';
        case 14: return '15 day';
        case 15: return '1 month';
        case 16: return '3 month';
        default: return num;
    }
}

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'line',
            animation: false,
            events: {
                click: function (e) {
                    // find the clicked values and the series
                    var x = Math.round(e.xAxis[0].value),
                        y = e.yAxis[0].value,
                        series = this.series[0];

                    var unique = true;
                    for (var pt in series.data) {
                        if (series.data[pt].x == x) {
                            unique = false;
                            console.log(series.data[pt]);
                            series.data[pt].update(y);
                            break;
                        }
                    }
                    if (unique && x > 0) {
                        series.addPoint([x, y]);
                    }
                }
            }
        },
        title: {
            text: 'Surprise'
        },
        subtitle: {
            text: 'Draw it'
        },
        xAxis: {
            crosshair: true,
            gridLineWidth: 1,
            title: {
                text: 'Time'
            },
            tickInterval: 1,
            labels: {
                formatter: function() { return num2time(this.value); },
            },
            minPadding: 0.2,
            maxPadding: 0.2,
            min: -3.5,
            max: 16,
            plotBands: [{
                from: -5,
                to: 0,
                color: '#e6e6e6',
            }]
        },
        yAxis: {
            title: {
                text: 'Intensity'
            },
            crosshair: true,
            gridLineWidth: 1,
            minPadding: 0.2,
            maxPadding: 0.2,
            min: -50,
            max: 50,
            plotLines: [{
                color: '#d3d3d3',
                width: 3,
                value: 0
            }],
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderWidth: 0,
            shadow: false,
            headerFormat: '',
            pointFormatter: function () {
                return '<b>'+ num2time(this.x) + ': ' + Highcharts.numberFormat(this.y, 1) +'</b><br/>';
            },
            hideDelay: 500
        },
        plotOptions: {
            series: {
                stickyTracking: false,
                showInLegend: false,
            },
            // line: {
                // cursor: 'ns-resize'
            // }
        },
        series: [{
            // data: [[0, 0]],
            data: [0, 0, 0, 0, 0, 0],
            pointStart: -5,
            draggableY: true,
            dragMaxY: 50,
            dragMinY: -50,
            dragSensitivity: 5,
            marker: {
                symbol: 'circle',
            },
            color: '#7CB5EC',
            point: {
                events: {
                    click: function () {
                        console.log(this);
                        if (this.series.data.length > 1 && this.x > 0) {
                            this.remove();
                        }
                    }
                }
            },
        }/*, {
            data: [0, 0, 0, 0, 0, 0],
            pointStart: -5,
            marker: {
                symbol: 'circle',
            },
            color: '#7CB5EC'
        }*/]
    });
});