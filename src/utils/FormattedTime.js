import { useState, useEffect } from "react";

export function FormattedTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second/
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);
  const formattedTime = `${currentTime
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase()}, ${currentTime.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  })}`;

  return formattedTime;
}
