import "./WeatherCenterContent.css";
import TemperatureDegrees from "./TemperatureDegrees";
import cloudy from "../../../media/media-weather-conditions/cloudy.png";
import snowy from "../../../media/media-weather-conditions/snowy.png";
import rainy from "../../../media/media-weather-conditions/rainy.png";

const WEATHER_STATUSES = {
  Rain: rainy,
  Snow: snowy,
  Cloud: cloudy,
};

const WeatherCenterContent = (props) => {
  const weatherObject = props.weather;
  const pngDeterminer = weatherObject["main"];
  const pngDescription = weatherObject["description"];
  return (
    <div className="weather-media-container">
      <img
        className="weather-status-img"
        src={WEATHER_STATUSES[pngDeterminer]}
        alt=""
      />
      <TemperatureDegrees temp={props.temp} />
      <h4>{pngDescription}</h4>
    </div>
  );
};

export default WeatherCenterContent;
