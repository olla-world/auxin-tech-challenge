import React from "react";

import "./countryCovidData.css";
import vaccineIcon from "./../../../icons/syringe.png";

const CountryCovidData = ({ countryCovidData }) => {
  console.log(countryCovidData);
  const { properties } = countryCovidData || {};
  return (
    countryCovidData && (
      <div id="data-card-layout" className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>Confirmed Cases :</div>
          <span className="badge bg-warning text-dark">
            {properties.confirmedText}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>Deaths :</div>
          <span className="badge bg-danger text-white">
            {properties.deathsText}
          </span>
        </div>
        <hr />
        <div className="d-flex text-success align-items-center mb-2">
          <div className="mr-4">
            <img
              src={vaccineIcon}
              alt="vaccine"
              style={{ width: "24px", height: "24px" }}
            />
          </div>{" "}
          <div className="fs-5">Vaccination</div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>Vaccinated :</div> <span>{properties.peopleVaccinatedText}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>Fully Vaccinated :</div>{" "}
          <span>{properties.peopleFullyVaccinatedText}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>Total Vaccinations :</div>{" "}
          <span className="fs-4">{properties.totalVaccinationsText}</span>
        </div>
      </div>
    )
  );
};

export default CountryCovidData;
