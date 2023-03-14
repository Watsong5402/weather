import "./WeatherDisplay.css";
import WeatherDisplayTopBar from "./TopBar/WeatherDisplayTopBar";
import WeatherDisplayBottomBar from "./BottomBar/WeatherDisplayBottomBar";
import WeatherCenterContent from "./CenterContent/WeatherCenterContent";
import response from "../../WeatherData/rain_response.json";
import { useState } from "react";

const WeatherDisplay = () => {
  const [currentTemp, setCurrentTemp] = useState(response["current"]["temp"]);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(
    response["current"]["wind_speed"]
  );
  const [currentHumidity, setCurrentHumidity] = useState(
    response["current"]["humidity"]
  );
  const [currentWeather, setCurrentWeather] = useState(
    response["current"]["weather"][0]
  );

  const queryCityWeather = (q) => {
    const limit = 1;
    const appid = "e193a0e954f9e665fdec717c5e7bac9a";
    const prefix = "http://api.openweathermap.org/geo/1.0/direct";
    console.log(`query to run: ${prefix}?q=${q}?limit=${limit}?appid=${appid}`);
  };

  return (
    <div className="weather-display card">
      <WeatherDisplayTopBar searchButtonClicked={queryCityWeather} />
      <WeatherCenterContent temp={currentTemp} weather={currentWeather} />
      <WeatherDisplayBottomBar
        windSpeed={currentWindSpeed}
        humidity={currentHumidity}
      />
    </div>
  );
};

export default WeatherDisplay;
