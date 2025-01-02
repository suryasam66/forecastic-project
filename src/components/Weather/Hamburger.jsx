


  import { useState } from "react";
import "./Ham.css";

import photo from "../../assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GrAnalytics } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isOpen && (
                <div className="menu">
                  
                    <div className="left-main-containerr">
                    <button className="close-button" onClick={toggleMenu}><ImCross /></button>
                        {/* Logo with Close Button */}
                        <div className="logo-close-container">
                            <Link to="/"><img src={photo} alt="" id="logo-left"/></Link> 
                           
                        </div>

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

                        <p id="copyright"> Copyright © 2024 forecastic</p>
                    </div>
                </div>
            )}
        </div>
    );
}
