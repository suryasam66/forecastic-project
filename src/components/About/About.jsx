import Nav from "../Nav/Nav";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1729939621102.json";
import "./About.css";
import Body from "./Body";
export default function About() {
  return (
    <>
      <Nav />
      <div className="text">
        <div className="title-class">
          <p id="title-text">What we do !!</p>
        </div>
        <div className="animation-class">
          <div className="background-theme">
            <Lottie
              animationData={animationData}
              
              className="lottie-class"
            />
          </div>
        </div>
        <Body />
      </div>
     
    </>
  );
}
