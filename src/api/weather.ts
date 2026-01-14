export const getWeather = async (location: string) => {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.trim().replace(' ', '%20')}/?key=${import.meta.env.VITE_VC_WEATHER_KEY}`,
	);

	const data = await response.json();
	if (!response.ok) throw new Error('Failed to fetch weather data');

	return data;
};