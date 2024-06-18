import { useState } from "react";
import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import "./main.css";

export default function Weatherapp() {
  const [weatherInfromation, setWeatherInformation] = useState({
    city: "Mumbai",
    temperature: 24.84,
    minTemp: 25.05,
    maxTemp: 31.5,
    humidity: 47,
    feels_like: 25.68,
    weather: "Haze",
  });

  let updateWeatherInformation = (updatedWeatherInformationFromApi) => {
    setWeatherInformation(updatedWeatherInformationFromApi);
  };

  return (
    <div className="weather_app">
      <h2>Weather App By @kash_codes</h2>
      <Searchbox updateWeatherInformation={updateWeatherInformation} />
      <Infobox weatherInfromation={weatherInfromation} />
    </div>
  );
}
