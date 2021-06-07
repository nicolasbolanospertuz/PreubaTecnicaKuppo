import React from "react";
import "./banner.css";
import axios from "axios";

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      bogotaIcon: "",
      bogotaState: "",
      bogotaTemperature: "",
    };
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const key = "ae6a9f6f444e979f9ae1abc9c9a65c54";
    axios
      .get(URL, {
        params: {
          q: "bogota",
          appid: key,
          units: "metric",
        },
      })
      .then(async (res) => {
        this.setState({
          bogotaIcon: res.data.weather[0].icon,
          bogotaState: res.data.weather[0].main,
          bogotaTemperature: res.data.main.temp,
        });
      });
  }

  render() {
    return (
      <div class="Banner">
        <div class="BogotaPicture">
          <img
            class="BogotaImage"
            src={process.env.PUBLIC_URL + "bogota.jpg"}
          ></img>
          <div class="topleft">
            <img
              class="locationIcon"
              src={process.env.PUBLIC_URL + "locationIcon.png"}
            ></img>
            <h1 class="bogotaTitle">Bogotá</h1>
          </div>
        </div>

        <div class="BannerWeatherInfo">
          <svg
            class="BannerTemperature"
            height="400"
            width="350"
            fill="rgb(127, 104, 231)"
          >
            <path d="M 0 0 Q 0 0 50 0 L 150 0 Q 200 0 200 50 L 200 200 Q 200 250 150 250 L 50 250 Q 0 250 0 300 Z" />
          </svg>
          <svg
            class="BannerWeatherState"
            height="400"
            width="350"
            fill="rgb(49, 50, 140)"
          >
            <path d="M 0 0 Q 0 50 50 50 L 150 50 Q 200 50 200 100 L 200 200 Q 200 250 150 250 L 50 250 Q 0 250 0 200 Z" />
          </svg>
          <img
            className="city-icon"
            src={`https://openweathermap.org/img/wn/${this.state.bogotaIcon}@2x.png`}
          />
          <p className="city-weather">{this.state.bogotaState}</p>
          <div className="city-temp">
            <h1>
              {Math.round(this.state.bogotaTemperature)}
              <sup>&deg;C</sup>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
