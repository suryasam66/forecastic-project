import About from "../About/About";
import "./Nav.css";
import "../../mediaqueries.css";
import photo from "../../assets/logo.png";


import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUpLeft } from "react-icons/go";


export default function Nav() {
  return (
    <div  className="nav-main-class">
      <div className="nav-main">
        <div className="logo-class">
         <Link to="/"><img src={photo} alt="logo" /></Link> 
        </div>

        <div className="button-class">
        <div className="about-us">
            <Link to= "/" style={{textDecoration:"none"}}>
                <button id="about-home">
                    <div className="round-class">
                      <GoArrowUpLeft id="arrow-id"/>
                    </div>
                    <b>Home </b>
                    
                </button>
            </Link>
          </div>

          <div className="about-us">
            <Link to= "/about" style={{textDecoration:"none"}}>
                <button id="about-us">
                    <b>About Us </b>
                    <div className="round-class">
                      <GoArrowUpRight id="arrow-id"/>
                    </div>
                </button>
            </Link>
          </div>

          
        </div>
      </div>

      
    </div>
  );
}
