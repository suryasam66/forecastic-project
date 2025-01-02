import Search from "../search/Search/";
import MiddleLeft from "./MiddleLeft";
import MiddleRight from "./MiddleRight";
import { WEATHER_API_URL } from "../../api";
import { WEATHER_API_KEY } from "../../api";


import "./Weather.css";
import { useState } from "react";

export default function Middle() {

  const [currentWeather , setCurrentWeather] = useState(null);
  const [forecast , setForecast] = useState(null);
  
  const handleOnSearchChange = (searchData) => {
    const [lat , lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
        .then(async(response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();

           setCurrentWeather({ city: searchData.label , ...weatherResponse});
           setForecast({ city: searchData.label , ...forecastResponse})

        })
         .catch((err) => console.log(err))
  };
  //console.log(currentWeather)  // print the current weather data
  //console.log(forecast)        // check the next upcoming days weather data
  return (
    <>
     
      <div className="middle-main-container">
      
        <Search
          onSearchChange={handleOnSearchChange}
          id="middle-search-class"
        />

        <hr className="hr-middle-container" />
        <div className="middle-inner-container">
          <MiddleLeft data={currentWeather}/>
          {forecast && <MiddleRight data={forecast}/>}
        </div>
      </div>
    </>
  );
}
