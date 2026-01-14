import type { TimeOfDay } from "../types/types";

export const filterHours = (data: any, timeOfDay: TimeOfDay) => {
	return data.hours
		.filter((h: any) => {
			const hour = parseInt(h.datetime.split(':')[0], 10);
			if (timeOfDay === 'morning') return hour >= 6 && hour < 12;
			if (timeOfDay === 'afternoon') return hour >= 12 && hour < 18;
			// Evening logic: captures 6pm-11pm AND 12am-5am
			if (timeOfDay === 'evening') return hour >= 18 || hour < 6;
			return true;
		})
		.sort((a: any, b: any) => {
			if (timeOfDay !== 'evening') return 0; // Keep standard order for others

			const hourA = parseInt(a.datetime.split(':')[0], 10);
			const hourB = parseInt(b.datetime.split(':')[0], 10);

			// We want hours 18-23 to come first, then 0-5
			// Adjust hour so 0-5 becomes 24-29 for sorting purposes
			const adjustedA = hourA < 18 ? hourA + 24 : hourA;
			const adjustedB = hourB < 18 ? hourB + 24 : hourB;

			return adjustedA - adjustedB;
		})
}; 