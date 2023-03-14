import "../ValueLabel.css";

const HumidityValueLabel = (props) => {
  return (
    <div className="value-label-flex-container">
      <h5>{props.humidity}%</h5>
      <h5>Humidity</h5>
    </div>
  );
};

export default HumidityValueLabel;