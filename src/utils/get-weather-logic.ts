import type { DayData, HourData, TimeOfDay } from '../types/types';

/**
 * Calculates averages and max values for a specific window of hours.
 */
export const getRangeData = (day: DayData, timeOfDay: TimeOfDay) => {
  if (!day || !day.hours) return day;

  const filteredHours = day.hours.filter((h: HourData) => {
    const hour = parseInt(h.datetime.split(':')[0], 10);
    if (timeOfDay === 'morning') return hour >= 6 && hour < 12;
    if (timeOfDay === 'afternoon') return hour >= 12 && hour < 18;
    if (timeOfDay === 'evening') return hour >= 18 || hour < 6;
    return true;
  });

  if (filteredHours.length === 0) return day;

  const avgTemp = filteredHours.reduce((sum: number, h: HourData) => sum + h.temp, 0) / filteredHours.length;
  const avgHumidity = filteredHours.reduce((sum: number, h: HourData) => sum + h.humidity, 0) / filteredHours.length;
  // Use Max for wind because gusts matter more for meetups than averages
  const maxWind = Math.max(...filteredHours.map((h: HourData) => h.windspeed));

  return {
    ...day,
    temp: avgTemp,
    humidity: avgHumidity,
    windspeed: maxWind,
  };
};

/**
 * Returns a styled recommendation based on specific thresholds.
 */
export const getWeatherRecommendation = (temp: number, humidity: number, windspeed: number) => {
  if (windspeed > 15) {
    return { 
      label: "It's a no from me dog.", 
      color: "bg-red-50 text-red-700 border-red-100", 
      icon: "🚫" 
    };
  }

  if (humidity >= 25 && humidity <= 75) {
    return { 
      label: "Chance of Rain", 
      color: "bg-amber-50 text-amber-700 border-amber-100", 
      icon: "☔" 
    };
  }
  
  if (temp >= 60 && temp <= 75) {
    return { 
      label: "It's a go.", 
      color: "bg-green-50 text-green-700 border-green-100", 
      icon: "😎" 
    };
  }

  return { 
    label: "It's looking promising.", 
    color: "bg-slate-50 text-slate-700 border-slate-100", 
    icon: "🤷‍♂️" 
  };
};