import "./Menu.css"
import Lottie from "lottie-react";
import animatioData from "../../assets/Animation - 1729971239736.json";
import Left from "../Weather/left";

export default function Calender(){
    return(
        <>
        <div className="main-location-class" style={ {display: "flex"}}>
        <Left/>
        <div className="background-theme">
            <Lottie
              animationData={animatioData}
              
              className="lottie"
            />
          </div>
        </div>
         
        </>
    )
}