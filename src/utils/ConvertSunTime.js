export function ConvertSunTime(time) {
  const date = new Date(time * 1000); // Convert seconds to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;
  return formattedTime;
}
