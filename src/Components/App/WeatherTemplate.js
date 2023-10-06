import WeatherDataOnecity from "./WeatherDataOnecity";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import imgBg from "/Users/Paboda/Desktop/Job interview/ProjectRe/FidenzRe/weatherApp/src/Images/imgBg.jpg";

export default function WeatherTemplate(props) {
  const weatherData = props.weatherDataToWeatherTemplate;
  const navigate = useNavigate();

  const handleGridClick = (
    name,
    country,
    des,
    temp,
    tmin,
    tmax,
    pressure,
    hum,
    visi,
    wind,
    deg,
    sr,
    ss
  ) => {
    navigate(
      `oneCityView/${name}/${country}/${des}/${temp}/${tmin}/${tmax}/${pressure}/${hum}/${visi}/${wind}/${deg}/${sr}/${ss}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)", // Add a shadow border effect
        padding: "20px", // Add padding to the content
        borderRadius: "10px", // Add rounded corners//
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ color: "white" }}
      >
        Weather App
      </Typography>

      <Grid container spacing={2} style={{ width: "100%" }}>
        {weatherData.map((weather) => {
          return (
            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={4}
              onClick={() =>
                handleGridClick(
                  //assign grid to control value and can see  both desktop and mobile//
                  weather.name,
                  weather.sys.country,
                  weather.weather[0].description,
                  Math.round(weather.main.temp),
                  Math.round(weather.main.temp_min),
                  Math.round(weather.main.temp_max),
                  weather.main.pressure,
                  weather.main.humidity,
                  (weather.visibility / 1000).toFixed(1),
                  weather.wind.speed.toFixed(1),
                  weather.wind.deg,
                  weather.sys.sunrise,
                  weather.sys.sunset
                )
              }
            >
              <WeatherDataOnecity weathertoWeatherDataoneCity={weather} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
