import "./About.css";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1729911597429.json";
import animationDataE from "../../assets/Animation - 1729939236400.json"
export default function Body() {
  return (
    <>
      <div className="outer-body">
        <div className="innerbody-text">
          <p id="about-text">
            Welcome to <b>Forecastic</b>,
            <br />
            <br />
            your trusted source for precise and reliable weather information
            that empowers you to embrace each day, no matter what’s on the
            horizon. At Forecastic, we know that weather influences all aspects
            of life—from planning a beach outing to coordinating a hiking
            adventure, or simply deciding what to wear for the day. That’s why
            our mission is to provide you with accurate, location-specific
            forecasts tailored to your needs.
            <br />
            <br />
            Our platform combines cutting-edge meteorological technology with a
            user-friendly interface to deliver reliable weather insights at your
            fingertips. We believe in making weather information accessible and
            easy to understand, so you can make confident decisions with the
            latest updates. Forecastic’s team of skilled developers and
            meteorology experts is committed to ensuring that you stay informed
            and prepared, offering real-time weather alerts, radar maps, and
            in-depth forecasts whenever you need them.
          </p>
        </div>

        <div className="innerbody-photo">
          <Lottie
            animationData={animationData}
            height={300}
            width={1000}
            className="animation-b"
          />
        </div>
      </div>

      <div className="innerbody-textb">
        <p id="about-text">
          What sets Forecastic apart is our dedication to an exceptional user
          experience. We prioritize clarity and accessibility, simplifying the
          way you interact with weather data. Whether you’re checking the
          outlook for a trip, scheduling outdoor plans, or simply curious about
          current conditions, Forecastic is designed to make your experience
          seamless and informative. Our platform is continuously optimized to
          ensure you can quickly find the information you need, no matter where
          you are. We’re honored to be your go-to source for accurate weather
          updates, detailed radar views, and valuable weather insights. Thank
          you for trusting Forecastic to help you stay prepared, adapt with
          confidence, and make the most of each day, rain or shine.
          <br />
          <br />
          <span> Sincerely,</span>
          <br />
          <span>
            <b>The Forecastic Team</b>
          </span>
        </p>
          <br /><br />

          <div className="animation-class">
          <Lottie
            animationData={animationDataE}
            
            className="animation-e"
          />
        </div>

        <hr className="full-width-line" />
      </div>
      

    </>
  );
}
