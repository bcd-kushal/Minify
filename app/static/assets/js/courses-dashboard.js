/* Earnings Report Chart */
var options = {
    series: [{
        name: "Earnings",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }, {
        name: "Students",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }],
    chart: {
        height: 340,
        type: "bar",
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1.1, 1.1],
        show: true,
        curve: ['smooth', 'smooth'],
    },
    grid: {
        borderColor: '#f3f3f3',
        strokeDashArray: 3
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
        },
    },
    legend: {
        show: false
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["rgb(132, 90, 223)", "#e9e9e9"],
    plotOptions: {
        bar: {
            columnWidth: "50%",
            borderRadius: 2,
        }
    },
};
document.getElementById('courses-earnings').innerHTML = ''
var chart1 = new ApexCharts(document.querySelector("#courses-earnings"), options);
chart1.render();
function earningsReport() {
    chart1.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "#e9e9e9"],
    })
}
/* Earnings Report Chart */

/* Payouts Chart */
var options2 = {
    series: [{
        name: 'Paid',
        data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
        type: 'line',
    }, {
        name: 'UnPaid',
        data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
        type: "line",
    }],
    chart: {
        height: 270,
        toolbar: {
            show: false,
        },
        background: 'none',
        fill: "#fff",
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
    background: 'transparent',
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        dashArray: [0, 5],
    },
    xaxis: {
        type: 'month',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'top',
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90,
        }
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};
document.getElementById('course-payouts').innerHTML = ''
var chart2 = new ApexCharts(document.querySelector("#course-payouts"), options2);
chart2.render();
function coursePayouts() {
    chart2.updateOptions({
        colors: ["rgb(" + myVarVal + ")", "rgba(230, 83, 60,0.5)"],
    })
}
/* Payouts Chart */
