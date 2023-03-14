import "./WeatherDisplayBottomBar.css";
import HumidityIconLabel from "./Humidity/HumidityIconLabel";
import WindSpeedIconLabel from "./WindSpeed/WindSpeedIconLabel";

const WeatherDisplayBottomBar = (props) => {
  return (
    <div className="bottom-menu-flex-container">
      <HumidityIconLabel humidity={props.humidity} />
      <WindSpeedIconLabel windSpeed={props.windSpeed} />
    </div>
  );
};

export default WeatherDisplayBottomBar;
