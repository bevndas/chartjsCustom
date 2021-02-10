import React from "react";

function Legend(props) {
  console.log("lgeend", props);
  let legend = props.legend
    ? props.legend
        .filter((item) => item.props.dataquantity > 0)
        .sort((a, b) => b.props.dataquantity - a.props.dataquantity)
    : "";

  return (
    <>
      <ul>{legend}</ul>
    </>
  );
}

export default Legend;
