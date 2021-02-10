import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  const lineChartData = [
    {
      label: "Revenue",
      data: [3, 2, 2, 1, 5],
    },
    {
      label: "Customers",
      data: [1, 3, 2, 2, 4],
    },
    {
      label: "Water Consumption",
      data: [3, 2, 4, 1, 5],
    },
    {
      label: "Areas",
      data: [2, 4, 5, 2, 3],
    },
  ];
  return (
    <div className="App">
      <div className="chart">
        <LineChart
          data={lineChartData}
          xaxis={["Jan", "Feb", "Mar", "Apr", "May"]}
        />
      </div>
    </div>
  );
}

export default App;
