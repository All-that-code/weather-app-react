import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form className="Search" id="search-form">
        <input
          type="text"
          placeholder="Enter a city.."
          id="city-input"
          required
        />
        <input type="submit" value="SEARCH" id="submit-bttn" />
      </form>
    </div>
  );
}
