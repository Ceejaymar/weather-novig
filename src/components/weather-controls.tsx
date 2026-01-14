import {
	CalendarDotsIcon,
	MapPinIcon,
	PencilSimpleIcon,
} from '@phosphor-icons/react';

import type { DayOfWeek, TimeOfDay } from '../types/types';

type WeatherControls = {
	location: string;
	setLocation: (location: string) => void;
	timeOfDay: TimeOfDay;
	setTimeOfDay: (timeOfDay: TimeOfDay) => void;
	dayOfWeek: DayOfWeek;
	setDayOfWeek: (dayOfWeek: DayOfWeek) => void;
};

const dayOfWeekOptions: DayOfWeek[] = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
];
const timeOfDayOptions: TimeOfDay[] = ['morning', 'afternoon', 'evening'];

export default function WeatherControls({
	location,
	setLocation,
	timeOfDay,
	setTimeOfDay,
	dayOfWeek,
	setDayOfWeek,
}: WeatherControls) {
	return (
		<section className='flex flex-col gap-2 border-b-2 border-gray-700 pb-4'>
			<div className='relative group flex items-center gap-3'>
				<MapPinIcon size={24} weight='bold' className='text-slate-400' />
				<div className='flex flex-row items-center relative flex-1'>
					<input
						id='location'
						type='text'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className='w-40 text-2xl font-semibold tracking-tight text-slate-800 bg-transparent border-none outline-none focus:ring-0 placeholder:text-slate-300 capitalize cursor-text'
						placeholder='Enter location...'
					/>

					<PencilSimpleIcon
						size={20}
						className='opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity'
						weight='fill'
					/>
				</div>
			</div>
			<div className='flex items-center gap-2 font-semibold'>
				<CalendarDotsIcon size={24} weight='bold' className='text-slate-400' />
				<select
					value={dayOfWeek}
					onChange={(e) => setDayOfWeek(e.target.value as DayOfWeek)}
					className='rounded-md max-w-31 cursor-pointer text-slate-800'
				>
					{dayOfWeekOptions.map((day) => (
						<option key={day} value={day}>
							Every {day.charAt(0).toUpperCase() + day.slice(1)}
						</option>
					))}
				</select>
				<select
					value={timeOfDay}
					onChange={(e) => setTimeOfDay(e.target.value as TimeOfDay)}
					className='rounded-md max-w-31 cursor-pointer text-slate-800'
				>
					{timeOfDayOptions.map((time) => (
						<option key={time} value={time}>
							{time.charAt(0).toUpperCase() + time.slice(1)}
						</option>
					))}
				</select>
			</div>
		</section>
	);
}
