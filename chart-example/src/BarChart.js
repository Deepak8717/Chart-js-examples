import "./App.css";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  Plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const labels = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 20, 25, 19, 14, 10],
      backgroundColor: "red",
    },
    {
      label: "Dataset 2",
      data: [15, 20, 19, 21, 8, 4, 19],
      backgroundColor: "blue",
    },
  ],
};
function BarChart() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
