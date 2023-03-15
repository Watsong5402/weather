import "./WeatherDisplay.css";
import WeatherDisplayTopBar from "./TopBar/WeatherDisplayTopBar";
import WeatherDisplayBottomBar from "./BottomBar/WeatherDisplayBottomBar";
import WeatherCenterContent from "./CenterContent/WeatherCenterContent";
import miami_response from "../../WeatherData/miami_response.json";
import { useState } from "react";

const WeatherDisplay = () => {
  const [response] = useState(miami_response);
  const [currentTemp, setCurrentTemp] = useState(response["main"]["temp"]);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(
    response["wind"]["speed"]
  );
  const [currentHumidity, setCurrentHumidity] = useState(
    response["main"]["humidity"]
  );
  const [currentWeather, setCurrentWeather] = useState(response["weather"][0]);

  const queryCityWeather = (q) => {
    const appId = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`setting response to data: ${data}`);
        setCurrentTemp(data["main"]["temp"]);
        setCurrentWindSpeed(data["wind"]["speed"]);
        setCurrentHumidity(data["main"]["humidity"]);
        setCurrentWeather(data["weather"][0]);
      });
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
