import React from "react";
import HomeVideo from "../../Components/HomeVideo/HomeVideo";
import Slider from "../../Components/Slider/Slider";

function Homescreen() {
  return (
    <div className="homescreen">
      <Slider />
      <HomeVideo />
    </div>
  );
}

export default Homescreen;
