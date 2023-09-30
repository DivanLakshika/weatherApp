import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {  CardActionArea, Grid } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import img3 from "./img3.jpg";
import { useState,useEffect } from "react";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

// cities reprecenter


export default function OneCity({ weather }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);
  const formattedTime = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}, ${currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;

  const convertSuntime=(time)=>{
    const date = new Date(time * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ?'pm':'am';
    const formattedHours = (hours % 12) || 12; // Convert to 12-hour format
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${ampm}`;
    return formattedTime;
  }


 // const date = new Date(1695947329);
  return (
    <Card sx={{ maxWidth: 500 }} >
      <CardActionArea>
        <CardContent style={{ backgroundColor: "#383B47" }} >
          
          <Grid
            container
            style={{ height: 140, backgroundImage: `url(${img3})`,
            backgroundSize:"cover"
          }}
          >
            <Grid item xs={6}>
              <Typography color={"white"} variant="subtitle2"fontSize='20px' align="center" >

                {weather.name} {weather.sys.country}
                <br></br> 
                <Typography color={"white"} variant="subtitle2"fontSize='15px' >
                  
                {formattedTime}
                <br></br>
                <br></br>
                
                </Typography>
               
                <Grid >
                
                  <Typography color={"white"} variant="subtitle2"fontSize='15px' align="center"  >
                    <CloudQueueOutlinedIcon style={{ color: "white" }} />
                      {"  "+ weather.weather[0].description}
                  </Typography>
                </Grid> 
                
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color={"white"} variant="subtitle2" style={{ fontSize: '35px' }}>
                   {Math.round(weather.main.temp)} °C
              
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                 Temp Min: {Math.round(weather.main.temp_min)} °C
              </Typography>

              <Typography color={"white"} variant="subtitle2">
                 Temp Max: {Math.round(weather.main.temp_max)} °C
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container spacing={2}>
            
            <Grid item xs={4} style={{ borderRight: '1px solid #ffffff', padding: '0 10px' }} >
              <Typography color={"white"} variant="subtitle2">
                Pressure : {weather.main.pressure}pa
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Humidity : {weather.main.humidity} %
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Visibility : {(weather.visibility/1000).toFixed(1)} km
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ borderRight: '1px solid #ffffff', padding: '0 10px' }} >
              <NearMeOutlinedIcon style={{ color: "white" }} />
              <Typography color={"white"}>{(weather.wind.speed).toFixed(1)}ms / {weather.wind.deg} Degree</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color={"white"} variant="subtitle2">
                Sunrise : {convertSuntime(weather.sys.sunrise)}
                {/* {new Date(weather.sys.sunrise).toLocaleString().toString()} */}
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Sunset : {convertSuntime(weather.sys.sunset)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      
    </Card>
   
  );
}
