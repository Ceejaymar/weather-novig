import { Line } from 'react-chartjs-2';
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Title,
	Tooltip,
} from 'chart.js';

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Title,
	Tooltip,
);

export default function WeatherGraph({ data }: unknown) {
	console.log('in weather graph', data);
	const chartData = {
		labels: data?.hours.map((hour: unknown) => hour.datetime),
		datasets: [
			{
				label: 'Temperature',
				data: data?.hours.map((hour: unknown) => hour.temp),
				borderColor: 'rgb(255, 99, 132)',
				fill: false,
				yAxisID: 'yTemp',
				pointRadius: 0,
				tension: 0.4,
			},
			{
				label: 'Wind speed',
				data: data?.hours.map((hour: unknown) => hour.windspeed),
				borderColor: 'rgb(54, 162, 235)',
				fill: false,
				yAxisID: 'yWind',
				pointRadius: 0,
				tension: 0.4,
			},
			{
				label: 'Humidity',
				data: data?.hours.map((hour: unknown) => hour.humidity),
				borderColor: 'rgb(222, 247, 122)',
				fill: false,
				yAxisID: 'yHumidity',

				pointRadius: 0,
				tension: 0.4,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false,
					drawTicks: false,
				},
				border: {
					display: false,
				},
				ticks: {
					color: '#9ca3af',
					font: { size: 11 },
				},
			},
			yTemp: {
				display: false,
			},
			yWind: {
				display: false,
			},
			yHumidity: {
				display: false,
			},
		},
		plugins: {
			tooltip: {
				mode: 'index' as const,
				intersect: false,
			},
		},
	};

	return (
		<div style={styles.container}>
			<Line data={chartData} options={options} />
		</div>
	);
}

const styles = {
	container: {
		position: 'relative',
		width: '100%',
		height: '250px',
	},
};
