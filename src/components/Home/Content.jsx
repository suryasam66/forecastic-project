import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1729909168567.json";
import animationDataB from "../../assets/Animation - 1729932478365.json";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../mediaqueries.css";
import { GiUbisoftSun } from "react-icons/gi";

export default function Content() {
  return (
    <>
      
        <div className="main-content-div">


          <div className="heading-a">
            <div className="heading-b">
              <h3 id="title-text">Precise weather,&nbsp;&nbsp; <span id="sun-icon"><GiUbisoftSun /></span>&nbsp;&nbsp; </h3> &nbsp;
              <h3 id="title-text">precisely for you.</h3>
            </div>
          </div>
          <br /> <br /> <br />

          {/*-------------------------- */}
          <div className="button-class-ab">
            <Link to="/weather" style={{ textDecoration: "none" }}>
              <button id="content-about-ab">
                <b>Let's start </b>
                <div className="content-round-class">
                  <Lottie
                    animationData={animationDataB}
                    className="lottie-class-bt"
                  />
                </div>
              </button>
            </Link>
          </div>
          {/*------------------------------------ */}
          <div className="animation-class">
            <div className="background-theme">
              <Lottie animationData={animationData} className="lottie-class" id="home-page-lottie-class"/>
            </div>
          </div>


        </div>
      
    </>
  );
}
