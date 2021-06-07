import React from "react";
import "./extraInfo.css";
import Forecast from "../forecast/forecast";
import PlaceToVisit from "../placeToVisit/placeToVisit";
import ReviewsAndPlaces from "../reviewsAndPlaces/reviewsAndPlaces";
import ParisForecastAndLocations from "../parisForecastAndLocations/parisForecastAndLocations";

class ExtraInfo extends React.Component {
  render() {
    return (
      <div className="grid">
        <div>
          <Forecast />
        </div>
        <div>
          <PlaceToVisit />
        </div>
        <div>
          <ReviewsAndPlaces />
        </div>
        <div>
          <ParisForecastAndLocations />
        </div>
      </div>
    );
  }
}
export default ExtraInfo;
