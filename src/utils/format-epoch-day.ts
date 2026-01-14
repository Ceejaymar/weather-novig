export const formatEpochToDay = (epoch: number) => {
  const date = new Date(epoch * 1000);
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  const dayNumber = date.getDate();
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${dayName} the ${dayNumber}${getOrdinal(dayNumber)}`;
};