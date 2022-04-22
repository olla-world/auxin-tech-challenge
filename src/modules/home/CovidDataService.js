import papa from "papaparse";
import legendItems from "./entities/LegendItems";
import { getCountries } from "../../data/countries";

const features = getCountries().features;

class CovidDataService {
  covidUrl =
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.processCovidData(result.data),
    });
  };

  processCovidData = (covidCountries) => {
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      const covidCountry = covidCountries.find(
        (covidCountry) => country.id === covidCountry.iso_code
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      country.properties.deaths = 0;
      country.properties.deathsText = 0;

      country.properties.totalVaccinations = 0;
      country.properties.totalVaccinationsText = 0;

      country.properties.peopleVaccinated = 0;
      country.properties.peopleVaccinatedText = 0;

      country.properties.peopleFullyVaccinated = 0;
      country.properties.peopleFullyVaccinatedText = 0;

      country.properties.totalBoosters = 0;
      country.properties.totalBoostersText = 0;

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.total_cases);
        let deaths = Number(covidCountry.total_deaths);

        let totalVaccinations = Number(covidCountry.total_vaccinations);
        let peopleVaccinated = Number(covidCountry.people_vaccinated);
        let peopleFullyVaccinated = Number(
          covidCountry.people_fully_vaccinated
        );
        let totalBoosters = Number(covidCountry.total_boosters);

        country.properties.confirmed = confirmed;
        country.properties.confirmedText =
          this.formatNumberWithCommas(confirmed);

        country.properties.deaths = deaths;
        country.properties.deathsText = this.formatNumberWithCommas(deaths);

        country.properties.totalVaccinations = totalVaccinations;
        country.properties.totalVaccinationsText =
          this.formatNumberWithCommas(totalVaccinations);

        country.properties.peopleVaccinated = peopleVaccinated;
        country.properties.peopleVaccinatedText =
          this.formatNumberWithCommas(peopleVaccinated);

        country.properties.peopleFullyVaccinated = peopleFullyVaccinated;
        country.properties.peopleFullyVaccinatedText =
          this.formatNumberWithCommas(peopleFullyVaccinated);

        country.properties.totalBoosters = totalBoosters;
        country.properties.totalBoostersText =
          this.formatNumberWithCommas(totalBoosters);
      }
      this.setCountryColor(country);
    }

    this.setState(features);
  };

  setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );

    if (legendItem != null) country.properties.color = legendItem.color;
  };

  formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default CovidDataService;
