import React from "react";
import WeatherTemplate from "../Screens/WeatherTemplate";
import { useState, useEffect } from "react";

export default function FetchingWeatherData(props) {
  const cityCodes = props.citiCodesFetchingCustomerData;
  let apiToken;

  apiToken = process.env.REACT_APP_API_KEY;
  if (process.env.REACT_APP_API_KEY === undefined) {
    apiToken = `14293274ae83527da045f73b84430755`;
  } else {
    apiToken = process.env.REACT_APP_API_KEY;
  }

  const [weatherData, setWeatherData] = useState([]); //to get weatherdata to array

  async function fetchWeatherData() {
    //to get data from the wether.org site
    try {
      // console.log("interval");
      const units = "metric";
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`;

      const cacheKey = "weatherData"; // Unique cache key for all weather data
      const cachedData = JSON.parse(localStorage.getItem(cacheKey));

      if (Date.now() - cachedData.timestamp < 1000 * 300) {
        // Use cached data if it's less than 5 minutes old

        const data2 = cachedData.data;
        setWeatherData(data2.list);
      } else {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data, timestamp: Date.now() })
        );

        setWeatherData(data.list);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 1000 * 300); //after 5 minutes auto updating//
  }, []);

  return <WeatherTemplate weatherDataToWeatherTemplate={weatherData} />;
}
