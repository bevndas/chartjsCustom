import { lengendMarkUp, customToolTip } from "./ChartFunctions";
export const LineChartOptions = {
  responsive: true,
  scales: {
    xAxes: [
      {
        ticks: {
          padding: 10,
        },
        gridLines: {
          display: true,
          drawBorder: true,
          drawTicks: false,
          drawOnChartArea: false,
          offsetGridLines: true,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
          min: 0,
          stepSize: 2,
        },
        gridLines: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    ],
  },
  legend: {
    display: false,
    position: "right",
  },
  legendCallback: lengendMarkUp,
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  tooltips: {
    enabled: false,
    mode: "nearest",
    intersect: true,
    custom: customToolTip,
  },
  hover: {
    mode: "nearest",
    intersect: false,
  },
};
