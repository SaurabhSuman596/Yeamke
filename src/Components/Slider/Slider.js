import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="slider">
        <video playsInline autoPlay muted loop className="slide__background">
          <source src="assets/background.mp4" type="video/mp4" />
        </video>
        <h1>
          <span>YEAMKE : </span>Motivation hub
        </h1>
        <p>
          There is no other way to find Motivation other than Yeamke.We get
          inspired from you and give you ther best possible content for
          inspiration
        </p>
      </div>
    );
  }
}
