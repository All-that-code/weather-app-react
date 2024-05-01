import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperature-container">
      <h1>24</h1>
      <span class="temperature-unit" id="degree">
        <span className="celsius">°C</span> |{" "}
        <span className="fahrenheit">°F</span>
      </span>
    </div>
  );
}
