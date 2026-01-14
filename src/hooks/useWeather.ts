import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/weather';

export const useWeather = (location: string) => useQuery({
    queryKey: ['weather', location],
    queryFn: () => getWeather(location),
    enabled: location.length > 2,
    placeholderData: (previousData) => previousData,
});
