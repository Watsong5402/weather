import water from "../../../../media/media-icons/water_FILL0_wght400_GRAD0_opsz48.png";
import "../IconLabel.css";
import HumidityValueLabel from "./HumidityValueLabel";

const HumidityIconLabel = (props) => {
  return (
    <div className="icon-label-flex-container">
      <img className="icon" src={water} alt="" />
      <HumidityValueLabel humidity={props.humidity} />
    </div>
  );
};

export default HumidityIconLabel;
