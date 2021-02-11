import React, { useState, useRef, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import Legend from "./Legend";
import { LineChartOptions } from "./ChartOptions";

const chartColors = [
  "rgba(159, 19, 134, 0.4)",
  "rgba(42, 146, 2, 0.5)",
  "rgba(13, 12, 208, 0.4)",
  "rgba(178,34,34, 1)",
  "rgb(173,255,47)",
  "rgb(224,255,255)",
  "rgb(135,206,250)",
  "rgb(72,61,139)",
  "	rgb(255,20,147)",
];
function generateData(props) {
  const { xaxis, data } = props;

  const datasets = [];
  console.log("datadd", data);
  data.forEach((item, index) => {
    let color = chartColors[index];
    let obj = {
      data: null,
      label: "",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      backgroundColor: color,
      borderColor: color,
      pointBorderColor: color,
      pointRadius: 0,
    };

    obj.data = item.data;
    obj.label = item.label;
    datasets.push(obj);
  });

  return {
    labels: xaxis,
    datasets,
  };
}

const LineChart = (props) => {
  const [legendData, setlegendData] = useState(null);
  const chartRef = useRef(null);
  const data = useMemo(() => generateData(props));
  const options = LineChartOptions;

  useEffect(() => {
    const legend = chartRef.current.chartInstance.generateLegend();
    if (legend) {
      setlegendData(legend);
    }
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <Legend legendData={legendData} />

        <div className="date-comp">
          <img src="calendar.png" />
          <span>Mar 2020 to Oct 2020</span>
        </div>
      </div>

      <Line data={data} options={options} ref={chartRef} />
    </div>
  );
};
export default React.memo(LineChart);
