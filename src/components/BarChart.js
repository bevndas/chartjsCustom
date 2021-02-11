import React, { useState, useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { lengendMarkUp } from "./ChartFunctions";
import Legend from "./Legend";

const BarChart = ({ data }) => {
  const [legendData, setlegendData] = useState(null);
  const chartRef = useRef(null);
  useEffect(() => {
    const legend = chartRef.current.chartInstance.generateLegend();
    if (legend) {
      setlegendData(legend);
    }
  }, []);
  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
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
          stacked: true,
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
  };
  return (
    <div className="chart-container">
      <div className="chart-header">
        <Legend legendData={legendData} />

        <div className="date-comp">
          <img src="calendar.png" />
          <span>Mar 2020 to Oct 2020</span>
        </div>
      </div>
      <Bar data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default BarChart;
