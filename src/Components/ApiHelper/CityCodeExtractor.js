import React from "react";
import jsonData from "../cities.json";
import FetchingWeatherData from "./FetchingWeatherData";
import { useState, useEffect } from "react";

export default function CityCodeExtractor() {
  const cityCodes = jsonData.List.map((city) => city.CityCode);
  return <FetchingWeatherData citiCodesFetchingCustomerData={cityCodes} />;
}

/*const [cityCodes, setCityCodes] = useState([]);

  useEffect(() => {
    const cityCodesArray = jsonData.List.map((city) => city.CityCode); //map city code array//
    setCityCodes(cityCodesArray);
  }, []);*/
