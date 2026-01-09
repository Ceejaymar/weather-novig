export default function WeatherDetails({ data }: unknown) {
	const iconName = data.currentConditions.icon;
	const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${iconName}.svg`;

	return (
		<div>
			<img src={iconUrl} alt={iconName} />
			<p>{data.currentConditions.conditions}</p>
			<p>{Math.round(data.currentConditions.temp)}°F</p>
			<p>winds {Math.round(data.currentConditions.windspeed)}mph</p>
			<p>{data.currentConditions.precipprob}</p>
		</div>
	);
}
