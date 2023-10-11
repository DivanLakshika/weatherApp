import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import imgBg from "../../assets/Images/imgBg.jpg";
import "./WeatherTemplate.css";
import CityCard from "./CityCard";

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
      className="container"
      style={{
        backgroundImage: `url(${imgBg})`,
      }}
    >
      <div className="containerN">
        <Typography gutterBottom className="MuiTypography-h4">
          Weather App
        </Typography>

        <Grid container spacing={2}>
          {weatherData.map((weather) => {
            return (
              <Grid
                container
                spacing={0}
                key={weather.name}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
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
                <CityCard weathertoWeatherDataoneCity={weather} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
