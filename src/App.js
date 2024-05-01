import "./App.css";

import Search from "./Search";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="AppContainer">
      <div className="App">
        <Search />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
