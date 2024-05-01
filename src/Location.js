import React from "react";

import "./Location.css";

export default function Location() {
  return (
    <div className="location">
      <h1>San Francisco</h1>
      <div className="time" id="time">
        <p> Wednesday, 17:05h</p>
      </div>
      <div className="sky" id="sky">
        <p>Partly Cloudy</p>
      </div>
    </div>
  );
}
