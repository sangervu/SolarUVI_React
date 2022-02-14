import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import myFunctions from './myFunctions';

function InputLocation() {
  const [lat, setLat] = useState("60.20");
  const [lon, setLon] = useState("24.90");
  return (
    <form>
      <label>Latitude:
        <input
          type="text" 
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>Longitude:
        <input
          type="text" 
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </label>
    </form>
  )
}

export default InputLocation;