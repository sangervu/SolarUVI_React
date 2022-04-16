import { useState, useEffect } from "react";
import React from 'react';
import '../styles/style.css';

function InputLocation(props) {
  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  // const [map, setMap] = useState({});

  // const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");

  useEffect(() => {
    setInputs({
      lat: props.latitude,
      lon: props.longitude,
      timezone: '3'
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
      lon: '24.90',
      timezone: '3'
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
    //const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");

    setInputs({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      timezone: position.coords.timezone
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

        <label className="item">Enter your timezone:
          <input
            type="number"
            name="timezone"
            value={inputs.timezone || ""}
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