
/* Performance by category chart */
var options = {
    series: [{
        name: 'Designing',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }, {
        name: 'Development',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }, {
        name: 'SEO',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
    }],
    chart: {
        type: 'bar',
        height: 310,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    colors: ["rgba(132, 90, 223, 1)", "rgba(132, 90, 223, 0.5)", "rgba(132, 90, 223, 0.2)"],
    legend: {
        show: false,
        position: 'top'
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
        opacity: 1
    }
};
document.getElementById('performanceReport').innerHTML = '';
var chart1 = new ApexCharts(document.querySelector("#performanceReport"), options);
chart1.render();
function hrmperformanceReport() {
    chart1.updateOptions({
        colors: ["rgba(" + myVarVal + ", 1)", "rgba(" + myVarVal + ", 0.5)", "rgba(" + myVarVal + ", 0.2)"],
    })
}
/* Performance by category chart */

/* Jobs Summary chart */
var options = {
    series: [1754, 544, 682, 263],
    labels: ["Published", "Private", "Closed", "On Hold"],
    chart: {
        height: 250,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {

        pie: {
            expandOnClick: false,
            donut: {
                size: '70%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.7)", "rgba(132, 90, 223,0.4)", "rgb(243, 246, 248)"],
};
document.querySelector("#jobs-summary").innerHTML = " ";
var chart = new ApexCharts(document.querySelector("#jobs-summary"), options);
chart.render();
function JobsSummary() {
    chart.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "rgba(" + myVarVal + ", 0.7)", "rgba(" + myVarVal + ", 0.4)", "rgb(243, 246, 248)"],
    })
};
/* Jobs Summary chart */