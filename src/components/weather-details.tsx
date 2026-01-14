import { WindIcon, DropIcon } from '@phosphor-icons/react';

import { formatEpochToDay } from '../utils/format-epoch-day';
import { getIcon } from '../utils/get-icon';
import type { DayData } from '../types/types';
import { getWeatherRecommendation } from '../utils/get-weather-logic';
import RecBadge from './rec-badge';

type WeatherDetails = {
	currentConditions: DayData;
};

export default function WeatherDetails({ currentConditions }: WeatherDetails) {
	const { datetimeEpoch, conditions, temp, windspeed, humidity, icon } =
		currentConditions;
	const [iconUrl, iconName] = getIcon(icon);
	const recommendation = getWeatherRecommendation(temp, humidity, windspeed);

	return (
		<div className='flex flex-col items-center justify-center max-w-md gap-4 pt-6'>
			<h2 className='text-2xl font-normal'>
				{formatEpochToDay(datetimeEpoch)}
			</h2>
			<RecBadge
				color={recommendation.color}
				icon={recommendation.icon}
				label={recommendation.label}
			/>
			<div className='flex items-center gap-2'>
				<img src={iconUrl} alt={iconName} className='w-30 h-30' />
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-2'>
						<p className='text-lg font-semibold'>{conditions}</p>
						<p className='text-lg font-semibold'>{Math.round(temp)}°F</p>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<WindIcon weight='bold' />
							<p>winds {Math.round(windspeed)}mph</p>
						</div>
						<div className='flex items-center gap-2'>
							<DropIcon weight='bold' />
							<p>{Math.round(humidity)}%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
