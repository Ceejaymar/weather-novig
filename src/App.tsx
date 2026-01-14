import { useState } from 'react';

import { Navbar } from './components/navbar';
import WeatherControls from './components/weather-controls';
import WeatherDisplay from './components/weather-display';
import { useWeather } from './hooks/useWeather';
import { useDebounce } from './hooks/useDebounce';
import type { DayOfWeek, TimeOfDay } from './types/types';
import './App.css';

function App() {
	const [location, setLocation] = useState('new york');
	const debouncedLocation = useDebounce(location, 500);
	const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>(() => {
		return new Intl.DateTimeFormat('en-US', { weekday: 'long' })
			.format(new Date())
			.toLowerCase() as DayOfWeek;
	});

	const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(() => {
		const hour = new Date().getHours();
		if (hour >= 6 && hour < 12) return 'morning';
		if (hour >= 12 && hour < 18) return 'afternoon';
		return 'evening'; // covers 18:00 to 05:59
	});
	const { data, isPending, error } = useWeather(debouncedLocation);

	return (
		<div className='flex flex-col'>
			<Navbar />
			<WeatherControls
				location={location}
				setLocation={setLocation}
				timeOfDay={timeOfDay}
				setTimeOfDay={setTimeOfDay}
				dayOfWeek={dayOfWeek}
				setDayOfWeek={setDayOfWeek}
			/>

			{error && <div className='text-red-500'>Error: {error.message}</div>}

			<WeatherDisplay
				data={data}
				isPending={isPending}
				dayOfWeek={dayOfWeek}
				timeOfDay={timeOfDay}
				error={error}
			/>
		</div>
	);
}

export default App;
