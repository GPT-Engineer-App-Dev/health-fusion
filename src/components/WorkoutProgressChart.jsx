import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WorkoutProgressChart = ({ workouts }) => {
  const data = {
    labels: workouts.map(workout => new Date(workout.date).toLocaleDateString()),
    datasets: [
      {
        label: "Weight Lifted (kg)",
        data: workouts.map(workout => workout.weight),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Reps",
        data: workouts.map(workout => workout.reps),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Workout Progress Over Time",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WorkoutProgressChart;