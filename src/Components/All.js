import React from 'react';
import { useState,useEffect } from 'react';
import jsonData from './cities.json';
import { Container,Grid,Paper,Typography } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import img3 from './images/img3.jpg';
function All(){

  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();
  useEffect(() => {
        try {
          const cityCodesArray = jsonData.List.map((city) => city.CityCode);
          setCityCodes(cityCodesArray);
          // Rest of your code for fetching weather data//
        } catch (error) {
          console.error('Error mapping city codes:', error);
          // You can handle the error here, e.g., display an error message to the user//
        }
        
        // Fetch weather data for the City codes
        const apiToken = `14293274ae83527da045f73b84430755`; // Replace with your API key
        //14293274ae83527da045f73b84430755//
        //e60e16935f1dd735ddffcbaafa4352c9
        const units = "metric"; // You can change units as needed//
        // Construct the API URL//
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(",")}&units=${units}&appid=${apiToken}`;
        console.log("API URL:", apiUrl);
        // Fetch weather data//

        async function fetchCustomerData() {
          try {
            const response = await fetch(apiUrl);
            if (response.ok) {
              const data = await response.json();
              setWeatherData(data.list);
              setLoading(false);
            //  console.log(Array.isArray(weatherData));
             
            } else {
              console.error('Failed to fetch customer data');
            }
          } catch (error) {
            console.error('Error:', error);
            setLoading(false);
          }
        }
    
        fetchCustomerData();
          /*
        fetch(apiUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((weatherJsonData) => {
                // Set the weather data in the state
                console.log("Weather Data:", weatherJsonData);
                setWeatherData(weatherJsonData.list);
               // console.log(typeof weatherData);
                
              })
              .catch((error) => {
                console.error('Error fetching weather data:', error);
                // You can handle the error here, e.g., display an error message to the user/
              }); */
              
      
  }, []);




  //second part/
    const getWeatherBackground = (weatherDescription) => {
        //console.log("d");
        // You can define background styles based on the weather description here
        // For example, you can use a switch statement to map different descriptions to different backgrounds
        switch (weatherDescription) {
          case "clear sky":
            return { backgroundColor: "#87CEEB" }; // Light blue for clear skies
          case "overcast clouds":
            return { backgroundColor: "#A9A9A9" }; // Gray for cloudy weather
          case "Rain":
            return { backgroundColor: "#4682B4" }; // Dark blue for rain//
          default:
            return {}; // Default background if no match is found
        }
      };
    const listItemStyle = {
        display: "flex", // Use Flexbox to create a row layout/
        flexDirection: "row", // Items should be in a row
        alignItems: "center", // Align items vertically in the center
        padding: "16px", // Add padding for spacing between items
        margin: "10px 0", // Add margin for spacing between rows
        borderRadius: "8px", // Add rounded corners
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
        backgroundColor: "#fff", // White background for the list items
        width: "100%", // Make each row take up the full width
        boxSizing: "border-box", // Include padding and border in the width/
      };

      const listItemContentStyle = {
        // Add your content styles here
        fontSize: '18px',
        // Add more styles as needed/
      };

      
        // Convert the object values into an array//
  const navigateToItemPage =(id)=>{
    console.log(weatherData);
    navigate( {pathname:`/weather/${id}`,state:{ cityCodes:cityCodes}});
  }
  

      
  return (
      <div style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}>
        {Object.values(weatherData)?.map((cityWeather) => (
          <li
            key={cityWeather.id}
            style={{
              ...listItemStyle,
              backgroundImage: `url(${img3})`,
              ...getWeatherBackground(cityWeather.weather[0].description),
            }}
          >
            <div style={listItemContentStyle}>
              {cityWeather.name}, {cityWeather.sys.country}
              <br />
              Temperature: {cityWeather.main.temp}°C
              <br />
              {cityWeather.weather[0].description}
              <br />
              Temp Min: {cityWeather.main.temp_min}°C & Temp Max: {cityWeather.main.temp_max}°C
              <br />
              Pressure: {cityWeather.main.pressure} hPa
              <br />
              Humidity: {cityWeather.main.humidity}%
              <br />
              Visibility: {cityWeather.visibility / 1000} km
              <br />
              Wind: {cityWeather.wind.speed} m/s & {cityWeather.wind.deg}°
              <br />
              Sunrise: {cityWeather.sys.sunrise}
              <br />
              Sunset: {cityWeather.sys.sunset}
            </div>
            <button onClick={() => navigateToItemPage(cityWeather.id)}>Go to Item Page</button>
          </li>
        ))}
      </div>
    )
}



export default All;

/* (
  
    <div>
      {weatherData?.map((cityWeather) => (
         <li key={cityWeather.id} style={{ ...listItemStyle, ...getWeatherBackground(cityWeather.weather[0].description) }}>     
         <div style={listItemContentStyle}>   
          {cityWeather.name}, {cityWeather.sys.country}
          <br />
          Temperature: {cityWeather.main.temp}°C
          <br />
          
          <br />
          {cityWeather.weather[0].description}
          <br />
          Temp Min : {cityWeather.main.temp_min} °C & Temp Max : {cityWeather.main.temp_max} °C
          <br />
          Pressure: {cityWeather.main.pressure} hPa
          <br />
          Humidity: {cityWeather.main.humidity}%
          <br />
          Visibility: {cityWeather.visibility / 1000} km
          <br />
          Wind: {cityWeather.wind.speed} m/s & {cityWeather.wind.deg}°
          <br />
          Sunrise: {cityWeather.sys.sunrise}
          <br />
          Sunset: {cityWeather.sys.sunset}
          <br />
          </div>  
        </li>
      ))}
    </div>
  );
  */