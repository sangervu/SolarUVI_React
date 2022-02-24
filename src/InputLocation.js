import { useState } from "react";
import React from 'react';
import './style.css';
import SolarResults from './SolarResults';

function InputLocation(props) {
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
    setInputs({
      lat: '60.20',
      lon: '24.90'
    })
    getLocation();
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  const showPosition = position => {
    setInputs({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="item">Enter your latitude:
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
        <button onClick={handleSubmit}>Set local coordinate</button>
      </form>
      <SolarResults longitude={inputs.lon} latitude={inputs.lat} date={props}/>
    </>
  )
}

export default InputLocation;