import React from "react";
import jsonData from "../cities.json";
import FetchingCustomerData from "./FetchingCustomerData";
import { useState, useEffect } from "react";

export default function CityCodeExtractor() {
  const [cityCodes, setCityCodes] = useState([]);

  useEffect(() => {
    const cityCodesArray = jsonData.List.map((city) => city.CityCode); //map city code array
    setCityCodes(cityCodesArray);
  }, []);

  return <FetchingCustomerData citiCodesFetchingCustomerData={cityCodes} />;
}
