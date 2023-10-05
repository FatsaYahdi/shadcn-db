import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js'; 

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
)

const LineChart = () => {
    const data = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            labels: 'Statistics',
            data: [40, 20, 60, 70, 50, 80, 110],
        }],
        padding: {
            left: 30
        },
    }
    const options = {
        borderColor: "#3D6E65",
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "#34D399",
        responsive: true,
        tension: 0.4,
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 140,
            }
        },
        plugins: {
        },
    };
    return (
        <Line data={data} options={options} className="ml-4 my-10">

        </Line>
    )
}

export default LineChart