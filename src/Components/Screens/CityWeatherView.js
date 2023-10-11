import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import imgBg from "../../assets/Images/imgBg.jpg";
import imgF from "../../assets/Images/imgF.jpg";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { ConvertSunTime } from "../../utils/ConvertSunTime";
import { FormattedTime } from "../../utils/FormattedTime";
import "./CityWeatherView.css";

export default function CityWeatherView() {
  const {
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
    ss,
  } = useParams(); //get details from weatherdataoecity

  return (
    <div className="container" style={{ backgroundImage: `url(${imgBg})` }}>
      <Grid sx={12} spacing={0} className="grid">
        <Card className="card">
          <CardActionArea>
            <Grid
              container
              className="grid1"
              style={{
                backgroundImage: `url(${imgF})`,
              }}
            >
              <Grid style={{ height: 10, width: 800 }}>
                <Typography className="MuiTypography-subtitle2">
                  {name} {country}
                  <Typography className="MuiTypography2-subtitle2">
                    {FormattedTime()}
                  </Typography>
                </Typography>
              </Grid>

              <Grid container spacing={0} className="grid2">
                <Grid item sx={5} className="grid3">
                  <Typography className="MuiTypography3-subtitle2">
                    <Box mr={1}>
                      <CloudQueueOutlinedIcon
                        style={{ fontSize: "40px", color: "white" }}
                      />
                    </Box>
                    {des}
                  </Typography>
                </Grid>

                <Grid item sx={5} style={{ padding: "0 20px" }}>
                  <Typography className="MuiTypography1-subtitle2">
                    {temp} °C
                  </Typography>

                  <Typography className="MuiTypography2-subtitle2">
                    Temp Min: {tmin} °C
                  </Typography>

                  <Typography className="MuiTypography2-subtitle2">
                    Temp Max: {tmax} °C
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={0} style={{ height: 100 }}>
              <Grid item xs={4} className="grid4">
                <Typography className="MuiTypography4-subtitle2">
                  Pressure : {pressure}pa
                </Typography>
                <Typography className="MuiTypography4-subtitle2">
                  Humidity : {hum} %
                </Typography>
                <Typography className="MuiTypography4-subtitle2">
                  Visibility : {visi} km
                </Typography>
              </Grid>
              <Grid item xs={4} className="grid4">
                <Grid className="grid">
                  <NearMeOutlinedIcon style={{ color: "white" }} />
                </Grid>
                <Grid className="grid">
                  <Typography color={"white"}>
                    {wind}ms / {deg} Degree
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4} className="grid5">
                <Typography className="MuiTypography4-subtitle2">
                  Sunrise : {ConvertSunTime(sr)}
                </Typography>
                <Typography className="MuiTypography4-subtitle2">
                  Sunset : {ConvertSunTime(ss)}
                </Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
