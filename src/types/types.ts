export type DayOfWeek =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'
	| 'sunday';

  export type TimeOfDay = 'morning' | 'afternoon' | 'evening';

	export interface WeatherResponse {
		address: string;
		resolvedAddress: string;
		days: DayData[];
	}

	export interface DayData {
		datetimeEpoch: number;
		conditions: string;
		temp: number;
		windspeed: number;
		humidity: number;
		icon: string;
		hours: HourData[];
	};

	export interface HourData {
		datetime: string;
		datetimeEpoch: number;
		temp: number;
		humidity: number;
		windspeed: number;
		conditions: string;
		icon: string;
	}