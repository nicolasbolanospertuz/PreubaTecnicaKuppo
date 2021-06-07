import React from "react";
import "./forecast.css";
import axios from "axios";

class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      day1: "",
      dayIcon1: "",
      dayWeather1: "",
      dayMinTemp1: "",
      dayMaxTemp1: "",
      day2: "",
      dayIcon2: "",
      dayWeather2: "",
      dayMinTemp2: "",
      dayMaxTemp2: "",
      day3: "",
      dayIcon3: "",
      dayWeather3: "",
      dayMinTemp3: "",
      dayMaxTemp3: "",
    };
    const URL = "https://api.openweathermap.org/data/2.5/forecast";
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
        var days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const list = res.data.list;
        const dayList1 = list[8];
        const dayList2 = list[16];
        const dayList3 = list[24];
        const date1 = new Date(dayList1.dt_txt);
        const date2 = new Date(dayList2.dt_txt);
        const date3 = new Date(dayList3.dt_txt);
        const day1 = days[date1.getDay()];
        const day2 = days[date2.getDay()];
        const day3 = days[date3.getDay()];
        console.log(dayList1.weather[0].icon);
        this.setState({
          day1: day1,
          day2: day2,
          day3: day3,
          dayIcon1: dayList1.weather[0].icon,
          dayIcon2: dayList2.weather[0].icon,
          dayIcon3: dayList3.weather[0].icon,
          dayWeather1: dayList1.weather[0].description,
          dayWeather2: dayList2.weather[0].description,
          dayWeather3: dayList3.weather[0].description,
          dayMinTemp1: dayList1.main.temp_min,
          dayMinTemp2: dayList2.main.temp_min,
          dayMinTemp3: dayList3.main.temp_min,
          dayMaxTemp1: dayList1.main.temp_max,
          dayMaxTemp2: dayList2.main.temp_max,
          dayMaxTemp3: dayList3.main.temp_max,
        });
        console.log(this.state.day1);
      });
  }

  render() {
    return (
      <div className="master">
        <h1 className="three-days">
          3 days <span className="forecast">Forecast</span>
        </h1>
        <div className="three-day-forecast">
          <h4 className="first-day-name">{this.state.day1}</h4>
          <h5 className="first-day-weather">{this.state.dayWeather1}</h5>
          <h4 className="first-day-max-min">
            {Math.round(this.state.dayMinTemp1)}/
            {Math.round(this.state.dayMaxTemp1)}
          </h4>
          <img
            className="first-day-icon"
            src={`https://openweathermap.org/img/wn/${this.state.dayIcon1}@2x.png`}
          />
          <h4 className="second-day-name">{this.state.day2}</h4>
          <h5 className="second-day-weather">{this.state.dayWeather2}</h5>
          <h4 className="second-day-max-min">
            {Math.round(this.state.dayMinTemp2)}/
            {Math.round(this.state.dayMaxTemp2)}
          </h4>
          <img
            className="second-day-icon"
            src={`https://openweathermap.org/img/wn/${this.state.dayIcon2}@2x.png`}
          />
          <h4 className="third-day-name">{this.state.day3}</h4>
          <h5 className="third-day-weather">{this.state.dayWeather3}</h5>
          <h4 className="third-day-max-min">
            {Math.round(this.state.dayMinTemp3)}/
            {Math.round(this.state.dayMaxTemp3)}
          </h4>
          <img
            className="third-day-icon"
            src={`https://openweathermap.org/img/wn/${this.state.dayIcon3}@2x.png`}
          />
          <svg className="first-day" height="150" width="350">
            <g fill="none">
              <path
                stroke="gray"
                d="M 0 20 Q 0 0 20 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 20 120 Q 0 120 0 100 Z"
              />
            </g>
            <svg className="first-day-temps">
              <g fill="rgb(220, 232, 244)">
                <path
                  stroke="black"
                  d="M 220 20 Q 220 0 240 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 240 120 Q 220 120 220 100 Z"
                />
              </g>
            </svg>
          </svg>
          <svg className="second-day" height="150" width="350">
            <g fill="none">
              <path
                stroke="gray"
                d="M 0 20 Q 0 0 20 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 20 120 Q 0 120 0 100 Z"
              />
            </g>
            <svg className="second-day-temps">
              <g fill="rgb(220, 232, 244)">
                <path
                  stroke="black"
                  d="M 220 20 Q 220 0 240 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 240 120 Q 220 120 220 100 Z"
                />
              </g>
            </svg>
          </svg>
          <svg className="third-day" height="150" width="350">
            <g fill="none">
              <path
                stroke="gray"
                d="M 0 20 Q 0 0 20 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 20 120 Q 0 120 0 100 Z"
              />
            </g>
            <svg className="third-day-temps">
              <g fill="rgb(220, 232, 244)">
                <path
                  stroke="black"
                  d="M 220 20 Q 220 0 240 0 L 320 0 Q 340 0 340 20 L 340 100 Q 340 120 320 120 L 240 120 Q 220 120 220 100 Z"
                />
              </g>
            </svg>
          </svg>
        </div>
      </div>
    );
  }
}

export default Forecast;
