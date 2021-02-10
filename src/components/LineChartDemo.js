/*
import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import Legend from "./LegendDemo";

function LineChartDemo(props) {
  const chartRef = useRef(null);
  const legendRef = useRef(null);
  const [customLegend, setcustomLegend] = useState("");
  useEffect(() => {
    console.log("called");
    let legend = chartRef && chartRef.current.chartInstance.generateLegend();
    console.log("legend", legend);
    setcustomLegend(legend);
  }, []);
  const handleClick = (e) => {
    let inst = chartRef.chartInstance;
    let el = document.getElementById(e.currentTarget.id);
    if (el.classList.contains("btn-disabled")) {
      el.classList.remove("btn-disabled");
    } else {
      el.classList.add("btn-disabled");
    }
    let t = el.getAttribute("dataidx");
    let meta = inst.config.data.datasets[0]._meta;
    let first = Object.keys(meta)[0];
    meta[first].data[t].hidden = !meta[first].data[t].hidden;
    inst.update();
  };
  const legendMarkup = (chart) => {
    const legendSet = chart.data.datasets[0];
    const legend = chart.data.map((set, i) => {
      let datapoint = chart.data.labels[i];
      if (datapoint) {
        return (
          <li
            id={`${legendSet.label.replace(/\s/g, "")}`}
            key={datapoint}
            onClick={(e) => this.handleClick(e)}
            dataidx={i}
            dataquantity={legendSet.data[i]}
            style={{ borderColor: legendSet.backgroundColor[i] }}
          >
            <mark
              style={{
                backgroundColor: legendSet.backgroundColor[i] || "#e5e5e5",
              }}
            >
              {legendSet.data[i]}
            </mark>
            {`${datapoint.replace(/\(\d{1,6}\)$/g, "")}`}
          </li>
        );
      }
      return;
    });
    return legend;
  };
  return (
    <div>
      <Pie
        height={props.height}
        ref={chartRef}
        data={props.data}
        options={{
          legend: {
            display: false,
          },
          legendCallback: legendMarkup,
        }}
      />
      <Legend
        ref={legendRef}
        legend={customLegend}
        handleLegendOnClick={(e) => this.handleLegendOnClick(e)}
      />
    </div>
  );
}

export default LineChartDemo; */
