import type {
	DayData,
	DayOfWeek,
	TimeOfDay,
	WeatherResponse,
} from '../types/types';
import { WeatherCard } from './weather-card';
import { getRangeData } from '../utils/get-weather-logic';

type WeatherDisplay = {
	data: WeatherResponse | undefined;
	isPending: boolean;
	dayOfWeek: DayOfWeek;
	timeOfDay: TimeOfDay;
	error: Error | null;
};

export default function WeatherDisplay({
	data,
	isPending,
	dayOfWeek,
	timeOfDay,
	error,
}: WeatherDisplay) {
	if (isPending) {
		return (
			<div className='text-center text-2xl font-bold'>
				Fetching weather data...
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center text-2xl font-bold'>
				Error: {error.message}
			</div>
		);
	}

	const getDayOccurrence = (occurrence: number) => {
		let count = 0;

		const foundDay = data?.days?.find((day: DayData) => {
			const name = new Date(day.datetimeEpoch * 1000).toLocaleDateString(
				'en-US',
				{ weekday: 'long' },
			);

			if (name.toLowerCase() === dayOfWeek.toLowerCase()) {
				count++;
				return count === occurrence;
			}
			return false;
		});

		return foundDay || data?.days[0];
	};

	const rawThisWeek = getDayOccurrence(1);
	const rawNextWeek = getDayOccurrence(2);

	const thisWeek = rawThisWeek
		? getRangeData(rawThisWeek, timeOfDay)
		: undefined;
	const nextWeek = rawNextWeek
		? getRangeData(rawNextWeek, timeOfDay)
		: undefined;

	return (
		<section className='flex flex-col gap-6 md:flex-row '>
			{thisWeek && <WeatherCard dayData={thisWeek} timeOfDay={timeOfDay} />}
			{nextWeek && <WeatherCard dayData={nextWeek} timeOfDay={timeOfDay} />}
		</section>
	);
}
