import { Navbar } from './components/navbar';
import WeatherControls from './components/weather-controls';
import WeatherDetails from './components/weather-details';
import WeatherGraph from './components/weather-graph';
import { useWeather } from './hooks/useWeather';
import './App.css';

function App() {
	const { data } = useWeather();

	return (
		<>
			<Navbar />
			<WeatherControls />
			<WeatherDetails />
			<WeatherGraph />
		</>
	);
}

export default App;
