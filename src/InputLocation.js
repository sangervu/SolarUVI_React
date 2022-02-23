import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SolarResults from "./SolarResults";
import Location from "./common/location"

function InputLocation() {
  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The latitude you entered was: ${inputs.lat}
    The longitude you entered was: ${inputs.lon}`);
  }

  return (
    <>
      <location longitude={inputs.lon} latitude={inputs.lat}/>
      <form onSubmit={handleSubmit}>
        <label className="item">Enter latitude:
          <input
            type="number"
            name="lat"
            value={inputs.lat || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label className="item">Enter your longitude:
          <input
            type="number"
            name="lon"
            value={inputs.lon || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <input type="submit" />
      </form>
      <SolarResults longitude={inputs.lon} latitude={inputs.lat} />
    </>
  )
}

export default InputLocation;