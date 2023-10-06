import WeatherTemplate from "../App/WeatherTemplate";
import { useState, useEffect } from "react";

export default function FetchingCustomerData(props) {
  const cityCodes = props.citiCodesFetchingCustomerData;
  const apiToken = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState([]); //to get weatherdata to array//

  useEffect(() => {
    if (cityCodes.length) {
      //if citycode available then create get api
      const units = "metric";
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`;
      console.log("API URL:", apiUrl);
      fetchCustomerData();

      const intervalId = setInterval(fetchCustomerData, 1000 * 60 * 5); // Fetch data every 5minutes/
      //console.log(fetchCustomerData);
      console.log("interval");
      return () => {
        clearInterval(intervalId); // Clear the interval when the component unmounts
      };
    }
  }, [cityCodes]); //remeber the citycode //cityCodes

  async function fetchCustomerData() {
    try {
      const units = "metric";
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data.list);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return <WeatherTemplate weatherDataToWeatherTemplate={weatherData} />;
}
