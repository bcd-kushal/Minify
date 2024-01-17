(function () {
  "use strict";

  // for tasks stats
  var options = {
    series: [
      {
        name: "New",
        data: [76, 85, 101, 98, 87, 105],
      },
      {
        name: "Pending",
        data: [35, 41, 36, 26, 45, 48],
      },
      {
        name: "Completed",
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: "Inprogress",
        data: [13, 27, 31, 29, 35, 25],
      },
    ],
    chart: {
      type: "bar",
      height: 210,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        endingShape: "rounded",
      },
    },
    grid: {
      borderColor: "#f2f5f7",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
    stroke: {
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      labels: {
        show: true,
        style: {
          colors: "#8c9097",
          fontSize: "11px",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      title: {
        style: {
          color: "#8c9097",
        },
      },
      labels: {
        show: true,
        style: {
          colors: "#8c9097",
          fontSize: "11px",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };
  var chart = new ApexCharts(
    document.querySelector("#transactions"),
    options
  );
  chart.render();

})();
