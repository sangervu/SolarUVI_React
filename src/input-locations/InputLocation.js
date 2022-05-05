import { useState, useEffect } from "react";
import React from 'react';
import { useContext } from "react";
import MainContext from '../context/MainContext';

import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function InputLocation(props) {

  const { location, locToParent } = useContext(MainContext);

  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  // const [map, setMap] = useState({});
  // const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");

  useEffect(() => {
    setInputs({
      lat: location.lat,
      lon: location.lon,
      timezone: location.timezone
    })
  }, [location.lat, location.lon, location.timzone])

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  function handlePosition() {
    locToParent(inputs);
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

  const [checked, setChecked] = React.useState(false);

  return (
    <>
    <ModalHeader toggle={props.toggleModal}>Input location & Timezone</ModalHeader>
    <ModalBody>
      <form style={{ width: "250px" }} onSubmit={handleSubmit}>
        <label className="item">Enter your latitude:
          <input
            type="number"
            name="lat"
            value={inputs.lat || ""}
            onChange={locToParent}
          />
        </label>
        <br></br>
        <label className="item">Enter your longitude:
          <input
            type="number"
            name="lon"
            value={inputs.lon || ""}
            onChange={locToParent}
          />
        </label>
        <br></br>

        <label className="item">Enter your timezone:
          <input
            type="number"
            name="timezone"
            value={inputs.timezone || ""}
            onChange={locToParent}
          />
        </label>
        <br></br>

        <button onClick={handleSubmit}>Set local coordinate and timezone</button>
        <hr />

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckChange}
          />
          &nbsp;&nbsp;Get time zone (for solar sunset and position)
        </label>
      </form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.toggleModal}>Close</Button>
      </ModalFooter>
    </>
  )
}
export default InputLocation;
