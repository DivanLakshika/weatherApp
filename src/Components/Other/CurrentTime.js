// DID NOT NEED
function CurrentTime() {}

/*import { DisplaySettings } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import DisplayWeather from "./DisplayWeather";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the current time as a string (e.g., "HH:MM:SS")
  const formattedTime = currentTime.toLocaleTimeString();

 return <div>
 <h2>Current Time</h2>
 <div>{formattedTime}</div>
</div>;

}

export default CurrentTime;
*/