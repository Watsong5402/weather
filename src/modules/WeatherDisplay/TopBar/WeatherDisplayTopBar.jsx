import "./WeatherDisplayTopBar.css";
import pin from "../../../media/media-icons/location_on_FILL1_wght400_GRAD0_opsz48.svg";
import search from "../../../media/media-icons/search_FILL0_wght400_GRAD0_opsz48.svg";
import { useState } from "react";

const WeatherDisplayTopBar = (props) => {
  const [locale, setLocale] = useState("SPOKANE,WA");
  const inputValueChanged = (v) => {
    setLocale(v);
  };

  return (
    <div className="top-bar-flex-container">
      <input alt="" className="icon" type="image" src={pin} />
      <input
        value={locale}
        className="search-input"
        onChange={(e) => {
          inputValueChanged(e.target.value);
        }}
      ></input>
      <input
        alt=""
        className="icon circle"
        type="image"
        src={search}
        onClick={() => props.searchButtonClicked(locale)}
      />
    </div>
  );
};

export default WeatherDisplayTopBar;
