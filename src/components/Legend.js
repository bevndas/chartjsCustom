import React from "react";

function Legend({ legendData }) {
  console.log("leg", legendData);
  return (
    <div id="legend">
      <ul className="legend-list">
        {legendData && legendData.map((item) => item)}
      </ul>
    </div>
  );
}

export default Legend;
