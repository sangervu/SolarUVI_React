import ReactSlider from "react-slider";
import React from "react";
import './slider.css';

const Slider = () => {
  return (
    <ReactSlider
        ariaLabelledby="slider-label"
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={0}
        max={24}
        defaultValue={12}
        step={0.1}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};
export default Slider;
