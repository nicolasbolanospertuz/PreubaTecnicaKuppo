import React from "react";
import "./placeToVisit.css";

class PlaceToVisit extends React.Component {
  render() {
    return (
      <div className="master">
        <h1 className="title">
          Place to <span className="visit">visit</span>
        </h1>
        <div class="virgilioBarcoPicture">
          <img
            class="virgilioBarcoImage"
            src={process.env.PUBLIC_URL + "VirgilioBarco.jpg"}
          ></img>
          <div class="topleft">
            <img
              class="locationCityIcon"
              src={process.env.PUBLIC_URL + "locationIcon.png"}
            ></img>
            <h5 class="virgilioBarcoTitle">Biblioteca Virgilio Barco</h5>
            <h5 class="location">Bogotá</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceToVisit;
