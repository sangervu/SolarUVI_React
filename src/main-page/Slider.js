import ReactSlider from "react-slider";
import React from "react";
import './slider.css';

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};
export default Slider;