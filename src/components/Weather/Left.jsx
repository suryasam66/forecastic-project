import "./Weather.css";
import photo from "../../assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GrAnalytics } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Left() {
  return (
    <>
      <div className="left-main-container">
              
      <Link to="/"><img src={photo} alt="" id="logo-left"/></Link> 

        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <IoHomeOutline id="left-bar-icon"/> &nbsp;&nbsp;Home
          </button>
        </Link>
        <Link to="/weather" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <TiWeatherPartlySunny id="left-bar-icon"/> &nbsp;&nbsp;Forecast
          </button>
        </Link>
        <Link to="/locations" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <GrMapLocation /> &nbsp;&nbsp;Locations
          </button>
        </Link>
        <Link to="/analytics" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <GrAnalytics /> &nbsp;&nbsp;Analytics
          </button>
        </Link>
        <Link to="/calender" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <SlCalender /> &nbsp;&nbsp;Calendar
          </button>
        </Link>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <button className="icon-selected">
            <VscSettingsGear />
            &nbsp;&nbsp;Settings
          </button>
        </Link>

        <p id="copyright">Copyright © 2024 forecastic</p>

      </div>

   
    </>
  );
}
