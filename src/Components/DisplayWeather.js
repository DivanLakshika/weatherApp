
function DisplayWeather(){

}
export default DisplayWeather;
/*import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

function DisplayWeather(props) {
  const { weatherData /*,formattedTime,objectWeather } = props;
  console.log(objectWeather);
  console.log("As");
  const getWeatherBackground = (weatherDescription) => {
    console.log("d");
    // You can define background styles based on the weather description here
    // For example, you can use a switch statement to map different descriptions to different backgrounds
    switch (weatherDescription) {
      case "clear sky":
        return { backgroundColor: "#87CEEB" }; // Light blue for clear skies
      case "overcast clouds":
        return { backgroundColor: "#A9A9A9" }; // Gray for cloudy weather
      case "Rain":
        return { backgroundColor: "#4682B4" }; // Dark blue for rain
      default:
        return {}; // Default background if no match is found
    }
  };
  const listItemStyle = {
    display: "flex", // Use Flexbox to create a row layout
    flexDirection: "row", // Items should be in a row
    alignItems: "center", // Align items vertically in the center
    padding: "16px", // Add padding for spacing between items
    margin: "10px 0", // Add margin for spacing between rows
    borderRadius: "8px", // Add rounded corners
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    backgroundColor: "#fff", // White background for the list items
    width: "100%", // Make each row take up the full width
    boxSizing: "border-box", // Include padding and border in the width
  };

  const listItemContentStyle = {
    flex: 1, // Allow content to expand to fill available space/
  };

  return (

    
  
    <div>
      {objectWeather?.map((cityWeather) => (
         <li key={cityWeather.id} style={{ ...listItemStyle, ...getWeatherBackground(cityWeather.weather[0].description) }}>     
         <div style={listItemContentStyle}>   
          {cityWeather.name}, {cityWeather.sys.country}
          <br />
          Temperature: {cityWeather.main.temp}°C
          <br />
          
          <br />
          {cityWeather.weather[0].description}
          <br />
          Temp Min : {cityWeather.main.temp_min} °C & Temp Max : {cityWeather.main.temp_max} °C
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
          <br />
          </div>  
        </li>
      ))}
    </div>
  );
}





export default DisplayWeather;



//{formattedTime}






/*import React from "react";
import { Grid } from "@material-ui/core";


function DisplayWeather(props){

  const { weatherData, formattedTime } = props;
    return (
      <div>
        <h2>Weather Information</h2>  
             {weatherData?.map((cityWeather) => (    // map is very differnt before you map think where tho add grid
                  <li key={cityWeather.id}>
                     {cityWeather.name} , {cityWeather.sys.country}  
                    <br />
                    Temperature: {cityWeather.main.temp}°C
                    <br/>
                     {formattedTime}
                     <br/>
                     {cityWeather.weather[0].description}
                     <br/>
                      Temp Min : {cityWeather.main.temp_min} °C & Temp Max :  {cityWeather.main.temp_max} °C
                     <br/>
                      Pressure : {cityWeather.main.pressure} hPa
                      <br/>
                      Humidity : {cityWeather.main.humidity} %
                      <br/>
                      Visibility : {cityWeather.visibility/1000} km
                      <br/>
                      Wind : {cityWeather.wind.speed} m/s &  {cityWeather.wind.deg} Degree
                      <br/>
                      Sunrise : {cityWeather.sys.sunrise}  
                      <br/>
                      Sunset : {cityWeather.sys.sunset} 
                    <br/>
                  
                   </li>
              
            ))}
           
      </div>
    );
  }
  
export default DisplayWeather;
*/
