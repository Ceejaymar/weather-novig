export const getWeather = async () => {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York/?key=${import.meta.env.VITE_VC_WEATHER_KEY}`,
	);
	const data = await response.json();

	return data;
};