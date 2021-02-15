import { Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
export const lengendMarkUp = (chart) => {
  const legendSet = chart.data.datasets;
  const legend = legendSet.map((data, i) => {
    let dataLabel = data.label;
    let labelColor = data.backgroundColor;
    if (dataLabel) {
      const CustomCheckBox = withStyles({
        root: {
          color: labelColor,
          "&$checked": {
            color: labelColor,
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
      return (
        <li key={dataLabel}>
          {/* need to insert proper id */}
          <CustomCheckBox
            defaultChecked={true}
            onClick={(e) => handleClick(e, i, chart)}
          />
          {dataLabel}
        </li>
      );
    }
    return "";
  });
  return legend;
};
export const handleClick = (e, index, chartRef) => {
  const ctx = chartRef;
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

export const customToolTip = function (tooltipModel) {
  var tooltipEl = document.getElementById("chartjs-tooltip");

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = "<table></table>";
    document.body.appendChild(tooltipEl);
  }
  // set or remove custom css for tooltip
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
  console.log("tooltup", this);
  var position = this._chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font

  tooltipEl.style.opacity = 1;
  tooltipEl.style.left =
    position.left + window.pageXOffset + tooltipModel.caretX + "px";
  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + "px";
};
export const customBarToolTip = function (tooltipModel) {
  console.log("called", tooltipModel.opacity);
  var tooltipEl = document.getElementById("chartjs-tooltip");

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = "<table></table>";
    document.body.appendChild(tooltipEl);
  }
  console.log("class", tooltipEl.classList.contains("tooltip"));
  // set or remove custom css for tooltip
  if (tooltipEl.classList.contains("tooltip")) {
    tooltipEl.classList.remove("tooltip");
    tooltipEl.style.opacity = 0;
  } else {
    tooltipEl.classList.add("tooltip");
    tooltipEl.style.opacity = 1;
  }
  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    if (tooltipEl.classList.contains("tooltip")) {
      tooltipEl.classList.remove("tooltip");
    }
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
      innerHtml += `<tr><td class="statistics">20% higher than previous month</td></tr>`;
      innerHtml += `<tr><td><hr/></td></tr>`;
      innerHtml += `<tr><td><span class="data__key">Cashier:</span> <span class="data__value">$4,500,000</span></td> <td><span class="data__key">Vendor:</span> <span class="data__value">$1,280,000</span></td></tr>`;
      innerHtml += `<tr><td><span class="data__key">Online:</span> <span class="data__value">$220,000</span></td></tr>`;
    });
    innerHtml += "</tbody>";
    var tableRoot = tooltipEl.querySelector("table");
    tableRoot.innerHTML = innerHtml;
  }

  // `this` will be the overall tooltip
  var position = this._chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.left =
    position.left + window.pageXOffset + tooltipModel.caretX + "px";
  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + "px";
};
