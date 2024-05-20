export const formatUTCDateToString = (utcTimestamp: number): string => {
  const date = new Date(utcTimestamp);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day.toString().padStart(2, '0')} ${year}`;
}

export const isCurrentDateLessThanValue = (utcTimestamp: number): boolean => utcTimestamp > new Date().getTime();
