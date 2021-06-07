import React from "react";
import "./parisForecastAndLocations.css";
import axios from "axios";

class ParisForecastAndLocations extends React.Component {
  constructor() {
    super();
    this.state = {
      cityIcon: "",
      cityTemperature: "",
      cityName: "",
      cityCountry: "",
      cityHumidity: "",
      cityWindDirection: "",
      cityWindSpeed: "",
    };
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const key = "ae6a9f6f444e979f9ae1abc9c9a65c54";
    axios
      .get(URL, {
        params: {
          q: "paris",
          appid: key,
          units: "metric",
        },
      })
      .then(async (res) => {
        var directions = [
          "North",
          "North-East",
          "East",
          "South-East",
          "South",
          "South-West",
          "West",
          "North-West",
        ];
        var angle = res.data.wind.deg;
        var index =
          Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        this.setState({
          cityIcon: res.data.weather[0].icon,
          cityTemperature: res.data.main.temp,
          cityName: res.data.name,
          cityCountry: res.data.sys.country,
          cityHumidity: res.data.main.humidity,
          cityWindDirection: directions[index],
          cityWindSpeed: res.data.wind.speed,
        });
      });
  }

  render() {
    return (
      <div className="master">
        <div className="parisForecast">
          <img
            className="paris-weather-icon"
            src={`https://openweathermap.org/img/wn/${this.state.cityIcon}@2x.png`}
          />
          <h1 className="parisTemperature">
            {this.state.cityTemperature}
            <span className="celcius">
              <sup>&deg;C</sup>
            </span>
          </h1>
          <h1 className="cityName">{this.state.cityName}</h1>
          <h5 className="cityCountry">{this.state.cityCountry}</h5>
          <h4 className="cityHumidity">Humidity {this.state.cityHumidity}%</h4>
          <h4 className="cityWindDirection">{this.state.cityWindDirection}</h4>
          <h4 className="cityWindSpeed">{this.state.cityWindSpeed} km/h</h4>
          <svg className="parisForecastShape" width="500" height="260">
            <g fill="none">
              <path
                stroke="gray"
                d="M 40 60 Q 40 40 60 40 L 480 40 Q 500 40 500 60 L 500 200 Q 500 220 480 220 L 60 220 Q 40 220 40 200 Z"
              />
            </g>
            <svg className="parisWeatherShapeIcon">
              <g fill="rgb(220,232,244)">
                <path d="M 40 60 Q 40 40 60 40 L 140 40 Q 160 40 160 60 L 160 140 Q 160 160 140 160 L 60 160 Q 40 160 40 140 Z" />
              </g>
            </svg>
            <svg className="separator">
              <path stroke="rgb(220,232,244)" d="M 340 60 L 340 140 " />
            </svg>
          </svg>
        </div>
        <div className="addLocations">
          <h4 className="addLocationsText">Add Locations</h4>
          <img
            className="addLocation-icon"
            src={process.env.PUBLIC_URL + "addLocation.png"}
          />
          <svg className="addLocationsShape" width="500" height="330">
            <g fill="none">
              <path
                stroke="rgb(49, 50, 140)"
                d="M 40 40 Q 40 20 60 20 L 480 20 Q 500 20 500 40 L 500 300 Q 500 320 480 320 L 60 320 Q 40 320 40 300 Z"
              />
            </g>
            <svg className="addLocationsButtonShape">
              <g fill="rgb(240, 238, 251)">
                <path d="M 120 100 Q 120 60 160 60 L 380 60 Q 420 60 420 100 L 420 100 Q 420 140 380 140 L 160 140 Q 120 140 120 100 Z" />
              </g>
            </svg>
          </svg>
        </div>
      </div>
    );
  }
}

export default ParisForecastAndLocations;
