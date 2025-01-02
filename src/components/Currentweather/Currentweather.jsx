import "./Currentweather.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1730012592764.json";


export default function Currentweather({data}) {

 
  return (
    <>
      <div className="location-title">
        <p className="current-location" style={{ fontFamily: "PT Serif" }}>
          Current Location
        </p> 
        <p className="city">{data.city}</p>
      </div>
      <div className="weather">
        <div className="top">
          <div>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <Lottie animationData={animationData} className="weather-icon" />
        </div>
        
        <p id="photo-temp">{Math.round(data.main.temp)}°C</p>
      </div>
    </>
  );
}
