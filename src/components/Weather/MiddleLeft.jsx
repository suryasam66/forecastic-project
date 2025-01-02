import Currentweather from "../Currentweather/Currentweather";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1730012592764.json";
import animationDataS from "../../assets/Animation - 1730038858481.json";
import "./Middle.css";

export default function MiddleLeft({data}) {

  
  if (!data) return <div id="div-before-searching">
                            <p id="show-text-before-searching">Check Today's Weather Before You Head Out...</p>
                            <Lottie animationData={animationDataS} className="show-search-icon-before-searching" />
                    </div>;
  return (
    <div className="middle-left-main">
      <div className="middle-left-top">
         <Currentweather data={data}/>
      </div>

      <div className="midddle-left-middle">
        <p id="highlights" style={{fontFamily:  "PT Serif"}}>Today's Highlights</p>

        <div className="midddle-left-middle-top">
          <div className="fells-like">
            <p id="text-feels-c">{Math.round(data.main.temp)}°C</p>
            <p id="text-feels">Feels Like</p>
          </div>
          <div className="wind">
          <p id="text-feels-c">{data.wind.speed} m/s</p>
            <p id="text-wind">Wind</p>
          </div>
        </div>
        <div className="midddle-left-middle-buttom">
          <div className="humidity">
          <p id="text-feels-c">{data.main.humidity}%</p>
            <p id="text-humidity">Humidity</p>
          </div>
          <div className="pressure">
          <p id="text-feels-c">{data.main.pressure} hPa</p>
            <p id="text-pressure">Pressure</p>
          </div>
        </div>
        <div className="midddle-left-middle-buttom">
          <div className="humidity">
          <p id="text-feels-c">{Math.round(data.main.temp_min)}°C</p>
            <p id="text-humidity">Min Temp</p>
          </div>
          <div className="pressure">
          <p id="text-feels-c">{Math.round(data.main.temp_max)}°C</p>
            <p id="text-pressure">Max Temp</p>
          </div>
        </div>
      </div>
      {/* <div className="midddle-left-bottom"></div> */}
    </div>
  );
}
