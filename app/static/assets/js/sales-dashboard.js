"use strict";

var myElement1 = document.getElementById("latest-timeline");
new SimpleBar(myElement1, { autoHide: true });

/*  sales overview chart */
var options = {
  series: [
    {
      name: "Sales",
      data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
    },
    {
      name: "OPEX Ratio",
      data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
    },
    {
      name: "General & Admin",
      data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
    },
    {
      name: "Marketing",
      data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
    },
  ],
  chart: {
    stacked: true,
    type: "bar",
    height: 325,
  },
  grid: {
    borderColor: "#f5f4f4",
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true, // Ensure y-axis grids are shown
      },
    },
  },
  colors: [
    "rgb(132, 90, 223)",
    "rgba(132, 90, 223, 0.6)",
    "rgba(132, 90, 223, 0.3)",
    "#ebeff5",
  ],
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: -46,
            color: "#ebeff5",
          },
          {
            from: -45,
            to: 0,
            color: "#ebeff5",
          },
        ],
      },
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
  },
  yaxis: {
    title: {
      text: "Growth",
      style: {
        color: "#adb5be",
        fontSize: "14px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        cssClass: "apexcharts-yaxis-label",
      },
    },
    axisBorder: {
      show: true,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(119, 119, 142, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "";
      },
    },
  },
  xaxis: {
    type: "month",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    axisBorder: {
      show: false,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: "solid",
      color: "rgba(119, 119, 142, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
};console.log(options.grid);
document.getElementById("salesOverview").innerHTML = "";
var chart = new ApexCharts(document.querySelector("#salesOverview"), options);
chart.render();
function salesOverview() {
  chart.updateOptions({
    colors: [
      "rgb(" + myVarVal + ")",
      "rgba(" + myVarVal + ", 0.6)",
      "rgba(" + myVarVal + ", 0.3)",
      "#ebeff5",
    ],
  });
}
/*  sales overview chart */

/* Visitors By Country Map */
var markers = [
  {
    name: "Usa",
    coords: [40.3, -101.38],
  },
  {
    name: "India",
    coords: [20.5937, 78.9629],
  },
  {
    name: "Vatican City",
    coords: [41.9, 12.45],
  },
  {
    name: "Canada",
    coords: [56.1304, -106.3468],
  },
  {
    name: "Mauritius",
    coords: [-20.2, 57.5],
  },
  {
    name: "Singapore",
    coords: [1.3, 103.8],
  },
  {
    name: "Palau",
    coords: [7.35, 134.46],
  },
  {
    name: "Maldives",
    coords: [3.2, 73.22],
  },
  {
    name: "São Tomé and Príncipe",
    coords: [0.33, 6.73],
  },
];
var map = new jsVectorMap({
  map: "world_merc",
  selector: "#visitors-countries",
  markersSelectable: true,
  zoomOnScroll: false,
  zoomButtons: false,

  onMarkerSelected(index, isSelected, selectedMarkers) {
    console.log(index, isSelected, selectedMarkers);
  },

  // -------- Labels --------
  labels: {
    markers: {
      render: function (marker) {
        return marker.name;
      },
    },
  },

  // -------- Marker and label style --------
  markers: markers,
  markerStyle: {
    hover: {
      stroke: "#DDD",
      strokeWidth: 3,
      fill: "#FFF",
    },
    selected: {
      fill: "#ff525d",
    },
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "Poppins",
      fontSize: 13,
      fontWeight: 500,
      fill: "#35373e",
    },
  },
});
/* Visitors By Country Map */

/* sale value chart */
var options = {
  chart: {
    height: 229,
    type: "radialBar",
  },

  series: [60],
  colors: ["rgb(132, 90, 223)"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 2,
          opacity: 0.15,
        },
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#4b9bfa",
          fontSize: "16px",
          show: false,
        },
        value: {
          color: "#4b9bfa",
          fontSize: "30px",
          show: true,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Cart"],
};
document.querySelector("#sale-value").innerHTML = "";
var chart1 = new ApexCharts(document.querySelector("#sale-value"), options);
chart1.render();

function saleValue() {
  chart1.updateOptions({
    colors: ["rgb(" + myVarVal + ")"],
  });
}
/* sale value chart */
