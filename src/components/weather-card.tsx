import type { TimeOfDay } from '../types/types';
import WeatherDetails from './weather-details';
import WeatherGraph from './weather-graph';

import type { DayData } from '../types/types';

type WeatherCard = {
	dayData: DayData;
	timeOfDay: TimeOfDay;
};

export const WeatherCard = ({ dayData, timeOfDay }: WeatherCard) => {
	return (
		<section className='mb-6 w-full h-auto flex flex-col items-center'>
			<WeatherDetails currentConditions={dayData} />
			<WeatherGraph data={dayData} timeOfDay={timeOfDay} />
		</section>
	);
};
