Highcharts.chart('usage', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
		backgroundColor: null,
        plotShadow: false,
		margin: [-65, 0, 65, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
		},
    title: {
        text: '<br>Usage<br>',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
		style: {
            color: '#FFF',
            fontWeight: 'bold'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
        plotOptions: {
        pie: {
			size:'100%',
			shadow: false,
			borderWidth: 0,
                borderColor: null,
            center: ['50%', '50%'],
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: -90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        colors:['#fff', '#43C5FF', '#F9DC2D', '#0ACAC7', '#EFB278', '#EEC27D', '#DEC782', '#BCBB87', '#99AD8A', '#7B9D8A', '#5E8D8A'],
        name: 'Usage',
        innerSize: '50%',
        data: [
            ['Management',   1000000],
            ['Marketing',    4000000],
            ['Advertising', 12000000],
            ['Bank',    5000000],
            ['Legal',   2000000],
            {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }],
	    exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
});
Highcharts.chart('distribution', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
		backgroundColor: null,
        plotShadow: false,
		margin: [-65, 0, 65, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
		},
    title: {
        text: '<br>Distribution<br>',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
		style: {
            color: '#FFF',
            fontWeight: 'bold'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
        plotOptions: {
        pie: {
			size:'100%',
			shadow: false,
			borderWidth: 0,
                borderColor: null,
            center: ['50%', '50%'],
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: -90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        colors:['#fff', '#43C5FF', '#F9DC2D', '#0ACAC7', '#EFB278', '#EEC27D', '#DEC782', '#BCBB87', '#99AD8A', '#7B9D8A', '#5E8D8A'],
        name: 'Distribution',
        innerSize: '50%',
        data: [
            ['Private Sale',   1000000],
            ['ICO',    26000000],
            ['Founders', 2000000],
            ['Pr, bounty',    1000000],
            {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }],
	    exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
});