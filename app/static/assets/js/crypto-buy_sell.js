(function() {
    "use strict"

    var options = {
        series: [{
            name: "Buy",
            data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        }, {
            name: "Sell",
            data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
        }],
        chart: {
            height: 300,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [0, 5],
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgb(38, 191, 148)", "rgba(230, 83, 60, 0.3)"],
        yaxis: {
            title: {
                text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    };
    document.getElementById('buy_sell-statistics').innerHTML = ''
    var chart = new ApexCharts(document.querySelector("#buy_sell-statistics"), options);
    chart.render();

})()