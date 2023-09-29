import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import OneCity from './Components/OneCity';
import All from './Components/All';
function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<All/>} />
      <Route path='/weather/:id' element={<OneCity/>} />
      </Routes>
   </Router>
   </div>
  );
}

export default App;

  //1 Weather requst getting
  
  //2 Time
 /* const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second/
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Clean up the interval when the component unmounts/
    return () => clearInterval(intervalId);
  }, [cityCodes]);

  // Format the current time as a string (e.g., "HH:MM:SS")
 // const formattedTime = currentTime.toLocaleTimeString();
 const formattedTime = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}, ${currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;*/
 
//formattedTime={formattedTime}




/*import { useState,useEffect } from 'react';
import './App.css';
import DisplayWeather from './Components/DisplayWeather';
import jsonData from './Components/cities.json';

function App() {
  //1 Weather requst getting
  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  var objectCodes={};
  var objectWeather={};
  
  useEffect(() => {
        try {
          const cityCodesArray = jsonData.List.map((city) => city.CityCode);
          setCityCodes(cityCodesArray);
          console.log(cityCodes[0]);
          objectCodes= {...cityCodes};
          // Rest of your code for fetching weather data//
        } catch (error) {
          console.error('Error mapping city codes:', error);
          // You can handle the error here, e.g., display an error message to the user//
        }
        
        // Fetch weather data for the City codes
        const apiToken = `14293274ae83527da045f73b84430755`; // Replace with your API key//

        //14293274ae83527da045f73b84430755//
        //e60e16935f1dd735ddffcbaafa4352c9
        const units = "metric"; // You can change units as needed//
        // Construct the API URL
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(",")}&units=${units}&appid=${apiToken}`;
        console.log("API URL:", apiUrl);
        // Fetch weather data
        fetch(apiUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((weatherJsonData) => {
                // Set the weather data in the state
                console.log("Weather Data:", weatherJsonData);
               // weatherData.push(weatherJsonData.list);
                setWeatherData(weatherJsonData.list);
               // console.log(typeof weatherData);
                
              })
              .catch((error) => {
                console.error('Error fetching weather data:', error);
                // You can handle the error here, e.g., display an error message to the user//
              });
              
      
  }, []);
  objectWeather={...weatherData};

  //2 Time
 /* const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second/
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Clean up the interval when the component unmounts/
    return () => clearInterval(intervalId);
  }, [cityCodes]);

  // Format the current time as a string (e.g., "HH:MM:SS")
 // const formattedTime = currentTime.toLocaleTimeString();
 const formattedTime = `${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}, ${currentTime.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;*/
/* return (
  <div className="App"> 
    <DisplayWeather   objectWeather={objectWeather}  />  
  </div>
);
}

export default App;

//formattedTime={formattedTime}


*/