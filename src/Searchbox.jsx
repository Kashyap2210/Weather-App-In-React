// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import "./main.css";

export default function Searchbox({ updateWeatherInformation }) {
  let [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const weatherUrl = "http://api.openweathermap.org/data/2.5/weather"; // Replace with actual URL
  const apiKey = "0aeefa879ba8277e7960fae163aef3db"; // Replace with your public API key (if needed)

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${weatherUrl}?q=${city}&appid=${apiKey}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temperature: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let updatedWeatherInformationFromApi = await getWeatherInfo();
      updateWeatherInformation(updatedWeatherInformationFromApi);
      // setCity("");
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          className="search_box_form"
          id="city"
          label="City Name"
          onChange={handleChange}
          variant="outlined"
          value={city}
          // disabled
          required
        />
        <br />
        <br />
        <Button
          className="search_button"
          variant="outlined"
          size="large"
          type="submit"
        >
          Search
        </Button>
        <br />
        <br />
      </form>
      {/* <p>{weather.temperature}</p> */}
      {error && (
        <div className="error">
          <h3>
            No Data Available For This Place,
            <br /> Please Try Nearby City
          </h3>
        </div>
      )}
    </div>
  );
}
