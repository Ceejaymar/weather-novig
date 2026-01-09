import { Navbar } from './components/navbar';
import WeatherControls from './components/weather-controls';
import WeatherDetails from './components/weather-details';
import WeatherGraph from './components/weather-graph';
import { useWeather } from './hooks/useWeather';
import './App.css';

function App() {
	const { data, isPending, isError } = useWeather();

	return (
		<>
			{console.log('in app', data)}
			<Navbar />
			<WeatherControls />
			{isPending ? <div>Loading...</div> : <WeatherDetails data={data} />}
			{isPending ? <div>Loading...</div> : <WeatherGraph data={data.days[0]} />}
		</>
	);
}

export default App;
