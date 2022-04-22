import React, { useState, useEffect } from "react";

import { CovidMap, Legend, CountryCovidData, Navbar } from ".";
import legendItems from "../entities/LegendItems";
import CovidDataService from "../CovidDataService";

import "./homePage.css";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [countryCovidData, setCountryCovidData] = useState(null);

  const legendItemsReverse = [...legendItems].reverse();

  const updateCountryCovidData = (slectedCountryCovidData) =>
    setCountryCovidData(slectedCountryCovidData);

  const load = () => {
    const covidData = new CovidDataService();
    covidData.load((countries) => setCountries(countries));
  };

  useEffect(() => load(), []);
  return (
    <div id="home-layout">
      <Navbar />
      {countries.length > 0 && (
        <CovidMap
          countries={countries}
          updateCountryCovidData={updateCountryCovidData}
        />
      )}
      <Legend legendItems={legendItemsReverse} />
      <CountryCovidData countryCovidData={countryCovidData} />
    </div>
  );
};

export default HomePage;
