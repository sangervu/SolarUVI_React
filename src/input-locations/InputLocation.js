import { useState, useEffect } from "react";
import React from 'react';
import '../styles/style.css';

function InputLocation(props) {
  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  // const [map, setMap] = useState({});

  useEffect(() => {
    setInputs({
      lat: props.latitude,
      lon: props.longitude
    })
  }, [props.latitude, props.longitude])


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }

  function handlePosition() {
    props.handleChange(inputs);
    // e.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputs({
      lat: '60.20',
      lon: '24.90'
    });
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

  useEffect(() => {
    handlePosition()
  }, [inputs])

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
        <label className="item">Enter your longitude:
          <input
            type="number"
            name="lon"
            value={inputs.lon || ""}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <button onClick={handleSubmit}>Set local coordinate</button>
        <hr />
        {/* <button onClick={handlePosition}>Set new coordinate</button> */}
      </form>
    </>
  )
}
export default InputLocation;