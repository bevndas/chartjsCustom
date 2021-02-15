import React, { useState, useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { lengendMarkUp } from "./ChartFunctions";
import Legend from "./Legend";
import { BarChartOptions } from "./ChartOptions";
const BarChart = ({ data }) => {
  const [legendData, setlegendData] = useState(null);
  const chartRef = useRef(null);
  useEffect(() => {
    const legend = chartRef.current.chartInstance.generateLegend();
    if (legend) {
      setlegendData(legend);
    }
  }, []);
  const options = BarChartOptions;
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
