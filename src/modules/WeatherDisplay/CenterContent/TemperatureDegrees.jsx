import "./TemperatureDegrees.css";

const formatTemperatureCelsius = (temperature) => {
  return (temperature - 273).toPrecision(1);
};

const TemperatureDegrees = (props) => {
  return (
    <div className="temp-flexbox">
      <h3 className="temp-numeral">{formatTemperatureCelsius(props.temp)}</h3>
      <h3 className="temp-unit">
        <sup>°C</sup>
      </h3>
    </div>
  );
};

export default TemperatureDegrees;
