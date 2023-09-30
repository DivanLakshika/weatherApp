import React from "react";
import { useState, useEffect } from "react";
import jsonData from "./cities.json";
import { useNavigate } from "react-router-dom";
import img3 from "./images/img3.jpg";
import OneCity from "./OneCity";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";


const apiToken = `14293274ae83527da045f73b84430755`; // Replace with your API key

//const setIntervalweather=setInterval(All, 1000);

function New(){
  console.log("abs")
}
const setIntervalweather=setInterval(New, 1000);

function All() {
 
  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cityCodesArray = jsonData.List.map((city) => city.CityCode);
    setCityCodes(cityCodesArray);
  }, []);

  useEffect(() => {
    if (cityCodes.length) {
      const units = "metric"; // You can change units as needed//
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`;
      console.log("API URL:", apiUrl);
      fetchCustomerData(apiUrl);
    }
  }, [cityCodes]);

 

  async function fetchCustomerData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data.list);
        setLoading(false);
        //  console.log(Array.isArray(weatherData));
      } else {
        console.error("Failed to fetch customer data");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }

  //second part/
  const getWeatherBackground = (weatherDescription) => {
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
    boxSizing: "border-box", // Include padding and border in the width
  };

  const listItemContentStyle = {
    // Add your content styles here
    fontSize: "18px",
    // Add more styles as needed/
  };

  // Convert the object values into an array//
  const navigateToItemPage = (id) => {
    console.log(weatherData);
    navigate({ pathname: `/weather/${id}`, state: { cityCodes: cityCodes } });
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cityCodes]);
 const formattedTime = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}, ${currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;

 const handleGridClick=(name,country,des,temp,tmin,tmax,pressure,hum,visi,wind,deg,sr,ss)=>{
  
   navigate(`oneCityView/${name}/${country}/${des}/${temp}/${tmin}/${tmax}/${pressure}/${hum}/${visi}/${wind}/${deg}/${sr}/${ss}`);
  

 }

  return (
    <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Add a shadow border effect
          padding: '20px', // Add padding to the content
          borderRadius: '10px', // Add rounded corners
    }}>
      <Typography variant="h4" gutterBottom align="center" style={{ color: 'white' }} >
        Weather App
      </Typography>
     
      <Grid container spacing={2}  style={{width:"100%"}    }>
        {weatherData.map((weather) => {
          return (
            <Grid item xs={4} onClick={() => handleGridClick(
            weather.name,
            weather.sys.country,
            weather.weather[0].description,
            Math.round(weather.main.temp),
            Math.round(weather.main.temp_min),
            Math.round(weather.main.temp_max),
            weather.main.pressure,
            weather.main.humidity,
            (weather.visibility/1000).toFixed(1),
            (weather.wind.speed).toFixed(1),
            weather.wind.deg,
            weather.sys.sunrise,
            weather.sys.sunset

            )}>
              <OneCity weather={weather} />
            </Grid>
          );
        })}
      </Grid>
      
    </div>
  );
}

export default All;
