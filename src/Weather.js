import React from "react";
import Location from "./Location";
import Temperature from "./Temperature";
import WeatherCondition from "./WeatherCondition";
import Icon from "./Icon";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-container row">
      <div className="col md-auto location-temperature">
        <Location />
        <Temperature />
      </div>
      <div className="col md-auto icon-condition">
        <Icon />
        <WeatherCondition />
      </div>
    </div>
  );
}
