import React from "react";
import { useState, useEffect } from "react";
import jsonData from "./cities.json";
import { useNavigate } from "react-router-dom";
import img3 from "./images/img3.jpg";
import OneCity from "./OneCity";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

//code basic part page


const apiToken = `14293274ae83527da045f73b84430755`; // API key


function All() {
 
  const [cityCodes, setCityCodes] = useState([]);  //toget citycode to array
  const [weatherData, setWeatherData] = useState([]); //to get weatherdata to array 
  const navigate = useNavigate(); //navigate pages

  useEffect(() => {
    const cityCodesArray = jsonData.List.map((city) => city.CityCode);  //map city code array
    setCityCodes(cityCodesArray);
  }, []);

  useEffect(() => {
    if (cityCodes.length) {                 //if citycode available then create get api
      const units = "metric"; 
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`;
      console.log("API URL:", apiUrl); 
      fetchCustomerData(apiUrl);  

          const intervalId = setInterval(fetchCustomerData(apiUrl), 1000*60*5); // Fetch data every 5minutes
          console.log("interval");
          return () => {
            clearInterval(intervalId); // Clear the interval when the component unmounts
          };       
    }
  }, [cityCodes]);                        //remeber the citycode


  async function fetchCustomerData(apiUrl) {
    try {
     /* const units = "metric";
      const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
        ","
      )}&units=${units}&appid=${apiToken}`; */
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

  
  //click to get one city deatils weather
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
            <Grid item xs={2} sm={10} md={5} lg={4} onClick={() => handleGridClick( //assign grid to control value and can see  both desktop and mobile 
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
