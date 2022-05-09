import { useState, useEffect } from "react";
import React from 'react';
import { useContext } from "react";
import MainContext from '../context/MainContext';
import 'react-calendar/dist/Calendar.css';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function InputLocation(props) {

  const { location, locToParent, tzSelectToParent, timezoneState } = useContext(MainContext);

  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
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
      timezone: 3
    }
    )
  };

  function handleSubmit(event) {
    event.preventDefault();
    setInputs({
      lat: '60.20',
      lon: '24.90',
      timezone: '3'
    });
    getLocation();
  }

  return (
    <>
      <ModalHeader>Input location & Timezone</ModalHeader>
      <ModalBody>
        <form style={{ width: "250px" }} onSubmit={handleSubmit}>
          <label className="item">Enter latitude:
            <input
              type="number"
              name="lat"
              value={inputs.lat || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label className="item">Enter longitude:
            <input
              type="number"
              name="lon"
              value={inputs.lon || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label className="item">Enter timezone:
            <input
              type="number"
              name="timezone"
              value={inputs.timezone || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>

          <hr />
          <input
            type="checkbox"
            checked={timezoneState}
            onChange={tzSelectToParent}
          /> <label>Get time zone </label>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit}>Current location</Button>
        <Button onClick={props.toggleModal}>Close</Button>
        <Button primary onClick={() => locToParent(inputs)}>Use location selected</Button>
      </ModalFooter>
    </>
  )
}

export default InputLocation;