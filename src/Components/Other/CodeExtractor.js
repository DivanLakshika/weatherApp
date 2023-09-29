//DIDNOT NEEDED
function CodeExtractor(){}
/*import DisplayWeather from "./DisplayWeather";
import React from "react";
import { useState, useEffect } from "react";
import jsonData from './cities.json';

function CodeExtractor(){

  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
        const cityCodesArray = jsonData.List.map((city) => city.CityCode);
        setCityCodes(cityCodesArray);
        // Fetch weather data for the City codes
        const apiToken = "f563e4e24f6acee0e318c52fe8019fe1"; // Replace with your API key
        const units = "metric"; // You can change units as needed
        // Construct the API URL
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(",")}&units=${units}&appid=${apiToken}`;
        console.log("API URL:", apiUrl);
        // Fetch weather data
        fetch(apiUrl)
          .then((response) => response.json())
          .then((weatherJsonData) => {
            // Set the weather data in the state
            console.log("Weather Data:", weatherJsonData);
            setWeatherData(weatherJsonData.list);
            
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      
      
  }, []);
  
  return <DisplayWeather weatherData={weatherData}/>



}


export default CodeExtractor;


/*
const [cityCodes, setCityCodes] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from cities.json
    fetch('cities.json') 
      .then((response) => response.json())
      .then((jsonData) => {
        // Extract the City codes from the "List" array
        const cityCodesArray = jsonData.List.map((city) => city.CityCode);
        setCityCodes(cityCodesArray);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
*/