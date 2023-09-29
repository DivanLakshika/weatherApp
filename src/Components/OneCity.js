import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Box,Typography,Grid,TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody } from "@material-ui/core";
import img3 from './images/img3.jpg';
import { Location } from "react-router-dom";

function OneCity(){
  const location=useLocation();
  const {id} = useParams();
  const {cityCode}=location.state|| {};
  console.log(" weather data:"+cityCode) ;
  const weatherData={"abs":1};
  if(!weatherData) {
    return <div>weather data is not available!</div>
  }
  else
  return ( 
    
    
    <div style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}>
      {Object.values(weatherData)?.map((cityWeather) => (
        <li
          key={cityWeather.id}
        >
          <div >
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
        </li>
      ))}
    </div>
  )
      }



export default OneCity;

/*{customerData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.clz}</TableCell>

            <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleUpdate(item.id)}>
                  Update
                </Button>
            </TableCell> 
            <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
            </TableCell>

          </TableRow>
        ))} */