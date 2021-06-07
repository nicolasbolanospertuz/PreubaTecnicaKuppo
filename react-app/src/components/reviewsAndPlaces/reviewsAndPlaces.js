import React from "react";
import "./reviewsAndPlaces.css";

class ReviewsAndPlaces extends React.Component {
  render() {
    return (
      <div className="master">
        <div className="reviews">
          <h6 className="topReviews">+ TopReviews</h6>
          <img
            class="profile1"
            src={process.env.PUBLIC_URL + "profile1.jpg"}
          ></img>
          <img
            class="profile2"
            src={process.env.PUBLIC_URL + "profile2.jpg"}
          ></img>
          <img
            class="profile3"
            src={process.env.PUBLIC_URL + "profile3.jpg"}
          ></img>
          <img
            class="reviewsIcon"
            src={process.env.PUBLIC_URL + "reviews.png"}
          ></img>
        </div>
        <div class="monserratePicture">
          <img
            class="monserrateImage"
            src={process.env.PUBLIC_URL + "Monserrate.jpg"}
          ></img>
          <div class="topleft">
            <img
              class="locationMonserrateIcon"
              src={process.env.PUBLIC_URL + "locationIcon.png"}
            ></img>
            <h5 class="monserrateTitle">Monserrate</h5>
            <h5 class="monserrateLocation">Bogotá</h5>
          </div>
        </div>
        <div class="laCandelariaPicture">
          <img
            class="laCandelariaImage"
            src={process.env.PUBLIC_URL + "la_candelaria.jpg"}
          ></img>
          <div class="topleft">
            <img
              class="locationLaCandelariaIcon"
              src={process.env.PUBLIC_URL + "locationIcon.png"}
            ></img>
            <h5 class="laCandelariaTitle">La Candelaria</h5>
            <h5 class="laCandelariaLocation">Bogotá</h5>
            <svg className="plusShape" height="400" fill="rgb(51, 50, 139)">
              <path d="M 120 80 A 45 50 0 1 1 210 80 L 210 265 A 45 50 0 1 1 120 265 Z" />
            </svg>
            <h1 className="plusText">+</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsAndPlaces;
