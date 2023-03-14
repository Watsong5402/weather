import air from "../../../../media/media-icons/air_FILL0_wght400_GRAD0_opsz48.png";
import WindSpeedValueLabel from "./WindSpeedValueLabel";
import "../IconLabel.css"

const WindSpeedIconLabel = (props) => {
  return (
    <div className="icon-label-flex-container">
      <img className="icon" src={air} alt="" />
      <WindSpeedValueLabel windSpeed={props.windSpeed} />
    </div>
  );
};

export default WindSpeedIconLabel;
