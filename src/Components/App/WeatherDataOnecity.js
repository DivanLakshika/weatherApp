import React from "react";
import img11 from "./Images/img11.jpg";
import img22 from "./Images/img22.jpg";
import img333 from "./Images/img333.jpg";
import img44 from "./Images/img44.jpg";
import img55 from "./Images/img55.jpg";
import Grid from "@mui/material/Grid";
import "./WeatherDataOnecity.css";
import { Typography, Card, CardActionArea, Box } from "@mui/material";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { ConvertSunTime } from "../../utils/ConvertSunTime";
import { FormattedTime } from "../../utils/FormattedTime";

export default function WeatherDataOnecity(props) {
  const weather = props.weathertoWeatherDataoneCity;
  let img;
  switch (weather.name) {
    case "Colombo":
      img = img11;
      break;
    case "Tokyo":
      img = img22;
      break;
    case "Liverpool":
      img = img333;
      break;
    case "Paris":
      img = img44;
      break;
    case "Sydney":
      img = img55;
      break;
    case "Boston":
      img = img11;
      break;
    case "Shanghai":
      img = img22;
      break;
    case "Oslo":
      img = img333;
      break;
    default:
      img = img11;
      break;
  }
  return (
    <Card className="card2">
      <CardActionArea>
        <Grid
          container
          className="gridD1"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <Grid item xs={7}>
            <Typography className="MuiTypographyD1-subtitle2">
              <b>
                {weather.name} {weather.sys.country}
              </b>
              <Typography className="MuiTypographyD2-subtitle2">
                {FormattedTime()}
              </Typography>

              <Typography className="MuiTypographyD3-subtitle2">
                <Box mr={1}>
                  <CloudQueueOutlinedIcon style={{ color: "white" }} />
                </Box>
                {weather.weather[0].description}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography className="MuiTypographyD4-subtitle2">
              {Math.round(weather.main.temp)} °C
            </Typography>
            <Typography className="MuiTypographyD5-subtitle2">
              Temp Min: {Math.round(weather.main.temp_min)} °C <br></br>Temp
              Max: {Math.round(weather.main.temp_max)} °C
            </Typography>
          </Grid>
        </Grid>

        <Grid container className="gridD22">
          <Grid container spacing={0} className="gridD2">
            <Grid item xs={4} className="gridD3">
              <Typography className="MuiTypographyD5-subtitle2 ">
                Pressure : {weather.main.pressure}pa <br></br>
                Humidity :{weather.main.humidity} % <br></br>
                Visibility :{(weather.visibility / 1000).toFixed(1)} km
              </Typography>
            </Grid>
            <Grid item xs={4} className="gridD3">
              <Grid className="gridD4">
                <NearMeOutlinedIcon style={{ color: "white" }} />
              </Grid>
              <Typography className="MuiTypographyD5-subtitle2 ">
                {weather.wind.speed.toFixed(1)}ms / {weather.wind.deg} Degree
              </Typography>
            </Grid>
            <Grid item xs={4} className="gridD5">
              <Typography className="MuiTypographyD5-subtitle2">
                Sunrise : {ConvertSunTime(weather.sys.sunrise)}
                <br></br>
                Sunset : {ConvertSunTime(weather.sys.sunset)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

/* <Card sx={{ maxWidth: 500 }}>
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
            <Grid item xs={7}>
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
            <Grid item xs={5}>
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
} */
