import React from "react";
import "./Forecast.css";

export default function Forectast() {
  return (
    <div className="forecast">
      <div className="forecast-grid">
        <div className="column">
          <div className="day">Wed</div>
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/125/167/original/partly_cloudy.png?1714595791"
              width="40px"
              alt="cloud icon"
            />
          </div>
          <div className="temperature">
            <span className="max">
              <strong>22</strong>
            </span>
            ° <span className="min">18</span>°
          </div>
        </div>
        <div className="column">
          <div className="day">Thu</div>
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/125/167/original/partly_cloudy.png?1714595791"
              width="40px"
              alt="cloud icon"
            />
          </div>
          <div className="temperature">
            <span className="max">
              <strong>24</strong>
            </span>
            ° <span className="min">14</span>°
          </div>
        </div>
        <div className="column">
          <div className="day">Fri</div>
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/125/167/original/partly_cloudy.png?1714595791"
              width="40px"
              alt="cloud icon"
            />
          </div>
          <div className="temperature">
            <span className="max">
              <strong>22</strong>
            </span>
            ° <span className="min">7</span>°
          </div>
        </div>
        <div className="column">
          <div className="day">Sat</div>
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/125/167/original/partly_cloudy.png?1714595791"
              width="40px"
              alt="cloud icon"
            />
          </div>
          <div className="temperature">
            <span className="max">
              <strong>20</strong>
            </span>
            ° <span className="min">10</span>°
          </div>
        </div>
        <div className="column">
          <div className="day">Sun</div>
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/125/167/original/partly_cloudy.png?1714595791"
              width="40px"
              alt="cloud icon"
            />
          </div>
          <div className="temperature">
            <span className="max">
              <strong>18</strong>
            </span>
            ° <span className="min">8</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
