
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import { GoArrowUp , GoArrowDown } from "react-icons/go";

import "./Middle.css"

const WEEK_DAYS = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

export default function MiddleRight({data}){
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return(
        <div className="middle-right-main">
            <br />
         <label className="title">7 Days Forecast</label>
         <Accordion allowZeroExpanded>
              {data.list.splice(0,6).map((item, idx) => (
                 <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <div className="daily-item-left">
                                <img  alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                                <label className="day">{forecastDays[idx]}</label>
                                </div>
                                <div className="daily-item-right">
                                <label className="description-weather">{item.weather[0].description}</label>
                                <label className="min-max">
                                      <GoArrowDown id="temp-min-max-arrow-bt"/> <b>{Math.round(item.main.temp_min)}°C</b> &nbsp;
                                      <GoArrowUp id="temp-min-max-arrow-bt"/><b>{Math.round(item.main.temp_max)}°C</b>
                                </label>
                                </div>
                                
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                              <div className="daily-details-grid-item">
                                   <label >Pressure:</label>
                                   <label >{item.main.pressure}hPa</label>
                              </div>
                              <div className="daily-details-grid-item">
                                   <label >Humidity:</label>
                                   <label >{item.main.humidity}%</label>
                              </div>
                              <div className="daily-details-grid-item">
                                   <label >Clouds:</label>
                                   <label >{item.clouds.all}%</label>
                              </div>
                              <div className="daily-details-grid-item">
                                   <label >Wind speed:</label>
                                   <label >{item.wind.speed} m/s</label>
                              </div>
                              <div className="daily-details-grid-item">
                                   <label >Sea level:</label>
                                   <label >{item.main.sea_level}m</label>
                              </div>
                              <div className="daily-details-grid-item">
                                   <label >Feels like:</label>
                                   <label >{Math.round(item.main.feels_like)}°C </label>
                              </div>
                        </div>
                    </AccordionItemPanel>
                 </AccordionItem>
                
                ))}
          
         </Accordion>
        </div>
    )
}