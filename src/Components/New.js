import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {  CardActionArea, Grid } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import img3 from "./img3.jpg";
import { useState,useEffect } from "react";
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';

//this is the unique page contain an unique page according to name of the place
//added by divan
export default function New(){

  const convertSuntime=(time)=>{
    const date = new Date(time * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ?'pm':'am';
    const formattedHours = (hours % 12) || 12; // Convert to 12-hour format
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${ampm}`;
    return formattedTime;
  }


  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second/
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);
  const formattedTime2 = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}, ${currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;


  const {name,country,des,temp,tmin,tmax,pressure,hum,visi,wind,deg,sr,ss}=useParams(); //get details from oneCitypage


  //styling
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Ensure the container takes up the full viewport height
      backgroundImage :`url(${img3})`
    },
    card: {
      width: 600, // Increase the width as needed
     height: 400, 
      maxWidth: 600,
      backgroundColor: "#383B47",
    //  textAlign: 'center', // Center the content within the card/
    },
    cardImage: {
      height: 200,
      backgroundSize: 'cover',
    },
  };

    return (
    <div style={styles.container} >
     
     <Card sx={styles.card}>
      <CardActionArea>
         <CardContent style={{ backgroundColor: "#383B47" }} >
          
          <Grid
            container
            style={{ height: 250, backgroundImage: `url(${img3})`,
            backgroundSize:"cover",

          }}
          >
            
          <Grid item xs={6}>
            <Typography color={"white"} variant="subtitle2"  fontSize='30px' align="center">
            <br></br>
                {name} {country}
               
              <Typography color={"white"} variant="subtitle2"fontSize='15px' >
                  
                  {formattedTime2}
                  <br></br>
                  <br></br>
                  </Typography>
                <Grid >
                  <br></br>
                
                <Typography color={"white"} variant="subtitle2"fontSize='20px' align="center"  >
                  <CloudQueueOutlinedIcon style={{ color: "white" }} />
                    {" " +des}
                </Typography>
              </Grid> 
            </Typography>
         </Grid>
          <Grid item xs={6}>
            <br></br>
            <Typography color={"white"} variant="subtitle2" fontSize='35px' textAlign='center' >
                {temp} °C
            
            </Typography>
            <Typography color={"white"} variant="subtitle2"fontSize='15px' textAlign='center'>
              Temp Min: {tmin} °C
            </Typography>

            <Typography color={"white"} variant="subtitle2"fontSize='15px' textAlign='center'>
              Temp Max: {tmax} °C
            </Typography>
           </Grid>
          </Grid>
          <br></br>
          <br></br>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ borderRight: '1px solid #ffffff', padding: '0 10px' }}>
          <br></br>
            <Typography color={"white"} variant="subtitle2"fontSize='15px' >
              Pressure : {pressure}pa
            </Typography>
            <Typography color={"white"} variant="subtitle2">
              Humidity : {hum} %
            </Typography>
            <Typography color={"white"} variant="subtitle2">
              Visibility : {visi} km
            </Typography>
        </Grid>
        <Grid item xs={4} style={{ borderRight: '1px solid #ffffff', padding: '0 10px' }}>
        <br></br>
          <NearMeOutlinedIcon style={{ color: "white" }} />
          <Typography color={"white"}>{(wind)}ms / {deg} Degree</Typography>
        </Grid>
        <Grid item xs={4}>
        <br></br>
              <Typography color={"white"} variant="subtitle2">
                Sunrise : {convertSuntime(sr)}
                {/* {new Date(weather.sys.sunrise).toLocaleString().toString()} */}
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Sunset : {convertSuntime(ss)}
              </Typography>
          </Grid>
      </Grid>
    </CardContent>
    </CardActionArea>
      
          </Card>     
            
          </div>      
              
    
    )

}


 
  