import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img33 from "./Images/img33.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";
import imgBg from "./Images/imgBg.jpg";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { ConvertSunTime } from "../../utils/ConvertSunTime";
import { FormattedTime } from "../../utils/FormattedTime";

export default function WeatherDataIndividualOnecity() {
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

  let img;
  switch (name) {
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

  //styling
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", // Ensure the container takes up the full viewport height
      backgroundImage: `url(${imgBg})`,
    },
    card: {
      width: 600, // Increase the width as needed
      height: 350,
      //maxWidth: 600,
      backgroundColor: "#383B47",
      //  textAlign: 'center', // Center the content within the card/
    },
    cardImage: {
      height: 200,
      backgroundSize: "cover",
    },
  };

  return (
    <div style={styles.container}>
      <Card sx={styles.card}>
        <CardContent style={{ backgroundColor: "#383B47" }}>
          <Grid
            container
            style={{
              height: 210,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            <Grid item xs={6}>
              <Typography
                color={"white"}
                variant="subtitle2"
                fontSize="30px"
                align="center"
              >
                <br></br>
                {name} {country}
                <Typography color={"white"} variant="subtitle2" fontSize="15px">
                  {FormattedTime()}
                  <br></br>
                  <br></br>
                </Typography>
                <Grid>
                  <Typography
                    color={"white"}
                    variant="subtitle2"
                    fontSize="20px"
                    align="center"
                  >
                    <CloudQueueOutlinedIcon style={{ color: "white" }} />
                    {" " + des}
                  </Typography>
                </Grid>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <br></br>
              <Typography
                color={"white"}
                variant="subtitle2"
                fontSize="35px"
                textAlign="center"
              >
                {temp} °C
              </Typography>
              <Typography
                color={"white"}
                variant="subtitle2"
                fontSize="15px"
                textAlign="center"
              >
                Temp Min: {tmin} °C
              </Typography>

              <Typography
                color={"white"}
                variant="subtitle2"
                fontSize="15px"
                textAlign="center"
              >
                Temp Max: {tmax} °C
              </Typography>
            </Grid>
          </Grid>
          <br></br>

          <Grid container spacing={1}>
            <Grid
              item
              xs={4}
              style={{ borderRight: "1px solid #ffffff", padding: "0 10px" }}
            >
              <br></br>
              <Typography color={"white"} variant="subtitle2" fontSize="15px">
                Pressure : {pressure}pa
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Humidity : {hum} %
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Visibility : {visi} km
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ borderRight: "1px solid #ffffff", padding: "0 10px" }}
            >
              <br></br>
              <NearMeOutlinedIcon style={{ color: "white" }} />
              <Typography color={"white"}>
                {wind}ms / {deg} Degree
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <br></br>
              <Typography color={"white"} variant="subtitle2">
                Sunrise : {ConvertSunTime(sr)}
                {/* {new Date(weather.sys.sunrise).toLocaleString().toString()} */}
              </Typography>
              <Typography color={"white"} variant="subtitle2">
                Sunset : {ConvertSunTime(ss)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
