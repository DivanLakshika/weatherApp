import React from "react";
import img1 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img1.jpg";
import img2 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img2.jpg";
import img33 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img33.jpg";
import img4 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img4.jpg";
import img5 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img5.jpg";
import img6 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img6.jpg";
import img7 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img7.jpg";
import img8 from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/img8.jpg";
import Grid from "@mui/material/Grid";
import { Typography, Card, CardActionArea, CardContent } from "@mui/material";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { ConvertSunTime } from "../../utils/ConvertSunTime";
import { FormattedTime } from "../../utils/FormattedTime";

export default function WeatherDataOnecity(props) {
  const weather = props.weathertoWeatherDataoneCity;
  let img;
  switch (weather.name) {
    case "Colombo":
      img = img1;
      break;
    case "Tokyo":
      img = img2;
      break;
    case "Liverpool":
      img = img33;
      break;
    case "Paris":
      img = img4;
      break;
    case "Sydney":
      img = img5;
      break;
    case "Boston":
      img = img6;
      break;
    case "Shanghai":
      img = img7;
      break;
    case "Oslo":
      img = img8;
      break;
    default:
      img = img1;
      break;
  }
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardContent style={{ backgroundColor: "#383B47" }}>
          <Grid
            container
            style={{
              height: 140,
              backgroundImage: `url(${img})`, // Use imgSrc based on current imageIndex
              backgroundSize: "cover",
            }}
          >
            <Grid item xs={6}>
              <Typography
                color={"white"}
                variant="subtitle2"
                fontSize="20px"
                align="center"
              >
                {weather.name} {weather.sys.country}
                <br></br>
                <Typography color={"white"} variant="subtitle2" fontSize="15px">
                  {FormattedTime()}
                  <br></br>
                  <br></br>
                </Typography>
                <Grid>
                  <Typography
                    color={"white"}
                    variant="subtitle2"
                    fontSize="15px"
                    align="center"
                  >
                    <CloudQueueOutlinedIcon style={{ color: "white" }} />
                    {"  " + weather.weather[0].description}
                  </Typography>
                </Grid>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                color={"white"}
                variant="subtitle2"
                style={{ fontSize: "35px" }}
              >
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
            <Grid
              item
              xs={4}
              style={{ borderRight: "1px solid #ffffff", padding: "0 10px" }}
            >
              <Typography color={"white"} variant="subtitle2">
                Pressure : {weather.main.pressure}pa
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Humidity : {weather.main.humidity} %
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Visibility : {(weather.visibility / 1000).toFixed(1)} km
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ borderRight: "1px solid #ffffff", padding: "0 10px" }}
            >
              <NearMeOutlinedIcon style={{ color: "white" }} />
              <Typography color={"white"}>
                {weather.wind.speed.toFixed(1)}ms / {weather.wind.deg} Degree
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color={"white"} variant="subtitle2">
                Sunrise : {ConvertSunTime(weather.sys.sunrise)}
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Sunset : {ConvertSunTime(weather.sys.sunset)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
