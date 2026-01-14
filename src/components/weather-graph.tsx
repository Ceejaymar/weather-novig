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
import type { DayData, HourData, TimeOfDay } from '../types/types';
import { graphOptions } from '../config/graph-options';
import { filterHours } from '../utils/filter-hours';

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Title,
	Tooltip,
);

type WeatherGraph = {
	data: DayData;
	timeOfDay: TimeOfDay;
};

export default function WeatherGraph({ data, timeOfDay }: WeatherGraph) {
	const filteredHours = filterHours(data, timeOfDay);
	const options = graphOptions;

	const chartData = {
		labels: filteredHours.map((hour: HourData) => {
			const h = parseInt(hour.datetime.split(':')[0], 10);
			const ampm = h >= 12 ? 'PM' : 'AM';
			const displayHour = h % 12 || 12;
			return `${displayHour}${ampm}`;
		}),
		datasets: [
			{
				label: 'Temperature',
				data: filteredHours.map((hour: HourData) => hour.temp),
				borderColor: 'rgb(34, 197, 94)',
				backgroundColor: 'rgb(34, 197, 94)',
				fill: false,
				yAxisID: 'yTemp',
				pointRadius: 0,
				tension: 0.4,
			},
			{
				label: 'Wind speed',
				data: filteredHours.map((hour: HourData) => hour.windspeed),
				borderColor: 'rgb(239, 68, 68)',
				backgroundColor: 'rgb(239, 68, 68)',
				fill: false,
				yAxisID: 'yWind',
				pointRadius: 0,
				tension: 0.4,
			},
			{
				label: 'Humidity',
				data: filteredHours.map((hour: HourData) => hour.humidity),
				borderColor: 'rgb(59, 130, 246)',
				backgroundColor: 'rgb(59, 130, 246)',
				fill: false,
				yAxisID: 'yHumidity',

				pointRadius: 0,
				tension: 0.4,
			},
		],
	};

	return (
		<div className='w-full h-[275px] relative mt-6 max-w-full overflow-hidden'>
			<Line data={chartData} options={options} />
		</div>
	);
}
