import "./App.css";
import BarChart from "./components/BarChart";
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
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Cashier",
        backgroundColor: "rgb(248, 176, 109)",
        borderColor: "rgba(0,0,0,1)",
        stack: "Stack 0",
        data: [32, 19, 85, 61, 36],
        borderWidth: 0,
        barThickness: 24,
      },
      {
        label: "3rd Party Vendor",
        backgroundColor: "rgb(136, 124, 170)",
        borderColor: "rgba(0,0,0,1)",
        stack: "Stack 0",
        data: [15, 49, 90, 31, 46],
        borderWidth: 0,
        barThickness: 24,
      },
      {
        label: "Online",
        backgroundColor: "rgb(140, 197, 201)",
        borderColor: "rgba(0,0,0,1)",
        stack: "Stack 0",
        data: [55, 39, 40, 71, 26],
        borderWidth: 0,
        barThickness: 24,
      },
      {
        label: "Areas",
        backgroundColor: "rgb(251, 96, 96)",
        borderColor: "rgba(0,0,0,1)",
        stack: "Stack 1",
        data: [85, 29, 50, 81, 26],
        borderWidth: 0,
        barThickness: 24,
      },
    ],
  };
  return (
      <div className="App">
        <div className="chart">
          <LineChart
              data={lineChartData}
              xaxis={["Jan", "Feb", "Mar", "Apr", "May"]}
          />
          <BarChart data={barChartData} />
        </div>
      </div>
  );
}

export default App;
