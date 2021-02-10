import React, { useState, useRef, useEffect } from "react";
import { Pie, Line } from "react-chartjs-2";
import "./chart.css";
import { Checkbox } from "@material-ui/core";

const chartColors = [
  "rgba(210, 177, 231, 0.4)",
  "rgba(149, 119, 52, 0.3)",
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
/*
const lengendMarkUp = (chart) => {
  var ul = document.createElement("ul");
  ul.classList.add("legend-list");
  chart.data.datasets.forEach(function (dataset, datasetIndex) {
    let backgroundColor = dataset.pointBorderColor;
    ul.innerHTML += `
            <li>
               <input type="checkbox" style="background-color: ${backgroundColor}" checked>
                ${dataset.label}
             </li>
          `;
  });
  return ul.outerHTML;
};
*/
function generateData(props) {
  const { xaxis, data } = props;

  const datasets = [];

  data.forEach((item, index) => {
    const i = Math.floor(Math.random() * 5);
    let color = chartColors[i];
    chartColors.splice(i, 1);
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
  const data = generateData(props);

  const lengendMarkUp = (chart) => {
    const legendSet = chart.data.datasets;
    const legend = legendSet.map((data, i) => {
      let dataLabel = data.label;
      if (dataLabel) {
        return (
          <li>
            <Checkbox value={dataLabel} />
          </li>
        );
      }
      return "";
    });
    /*  var ul = document.createElement("ul");
    ul.classList.add("legend-list");
    chart.data.datasets.forEach(function (dataset, datasetIndex) {
      let backgroundColor = dataset.pointBorderColor;
      ul.innerHTML += `${(
        <li>
          <Checkbox value={dataset.label} />
        </li>
      )}
            `;
    }); */
    setlegendData(legend);
    return legend;
  };
  const options = {
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
      custom: function (tooltipModel) {
        var tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.innerHTML = "<table></table>";
          document.body.appendChild(tooltipEl);
        }
        if (tooltipEl.classList.contains("tooltip")) {
          tooltipEl.classList.remove("tooltip");
        } else {
          tooltipEl.classList.add("tooltip");
        }
        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);

          var innerHtml = `<tbody>`;

          bodyLines.forEach(function (body, i) {
            const [label, value] = body[0].split(":");
            innerHtml += `<tr><td class="label">${label}</td></tr>`;
            innerHtml += `<tr><td>
            <div class="chart__data">
            <span class="data__first">$${Number(
              value
            )}</span> <span class="data__second">for ${
              titleLines[i] || titleLines[0]
            }<span></div></td></tr>`;
          });
          innerHtml += "</tbody>";
          var tableRoot = tooltipEl.querySelector("table");
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font

        tooltipEl.style.opacity = 1;
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX + "px";
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY + "px";
      },
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
  };
  const handleClick = (e, index) => {
    const ctx = chartRef.current.chartInstance;
    const meta = [];
    ctx.data.datasets.forEach((dataset, index) => {
      meta.push(ctx.getDatasetMeta(index));
    });
    meta[index].hidden = !meta[index].hidden;
    if (e.currentTarget.classList.contains("disable-legend")) {
      e.currentTarget.classList.remove("disable-legend");
    } else {
      e.currentTarget.classList.add("disable-legend");
    }
    ctx.update();
  };

  useEffect(() => {
    /* document.getElementById(
      "legend"
    ).innerHTML = chartRef.current.chartInstance.generateLegend();

    document.querySelectorAll("#legend li input").forEach((item, index) => {
      item.addEventListener("click", (e) => handleClick(e, index));
    });  */
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div id="legend">
          <ul className="legend-list">
            {legendData && legendData.map((item) => item)}
          </ul>
        </div>
        <div className="date-comp">
          <img src="calendar.png" />
          <span>Mar 2020 to Oct 2020</span>
        </div>
      </div>

      <Line data={data} options={options} ref={chartRef} />
    </div>
  );
};
export default LineChart;
