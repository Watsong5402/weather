import "../ValueLabel.css";

const WindSpeedValueLabel = (props) => {
  return (
    <div className="value-label-flex-container">
      <h5>{props.windSpeed} Km/h</h5>
      <h5>Wind Speed</h5>
    </div>
  );
};

export default WindSpeedValueLabel;