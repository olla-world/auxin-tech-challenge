import React from "react";
import { Map, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./covidMap.css";

const CovidMap = ({ countries, updateCountryCovidData }) => {
  const clikedOnCountry = (e) => {
    updateCountryCovidData(e.target.feature);
  };
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
    zIndex: 0,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.name;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(
      `<div>    
        <h5> 
          <div
            class="spinner-grow spinner-grow-sm text-warning mr-2"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div> ${name}
        </h5>
        <span>
          Total Infected : <b class="text-warning"> ${confirmedText} </b>
        </span>
      </div>`
    );
    layer.on({
      click: clikedOnCountry,
    });
  };

  return (
    <Map style={{ height: "80vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default CovidMap;
