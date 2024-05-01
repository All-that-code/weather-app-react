import React from "react";

import "./WeatherCondition.css";

export default function WeatherCondition() {
  return (
    <div className="weather-condition">
      <div className="humidity">Humidity</div>
      <div className="wind">Wind</div>
      <div className="current-humidity">
        3<span>%</span>
      </div>
      <div className="current-wind">
        5<span>hm/h</span>
      </div>
    </div>
  );
}
