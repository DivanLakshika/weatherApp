import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityCard from "./Components/Screens/CityWeatherView";
import CityCodeExtractor from "./Components/ApiHelper/CityCodeExtractor";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CityCodeExtractor />} />
          <Route
            path="oneCityView/:name/:country/:des/:temp/:tmin/:tmax/:pressure/:hum/:visi/:wind/:deg/:sr/:ss"
            element={<CityCard />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
