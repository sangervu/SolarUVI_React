import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import '../public/myFunctions.js';

function Item(props) {
  return <div className="item">
  <b>{props.name}</b> <br />
  <b>Degrees:</b> {props.value}
  </div>;
}

// document.getElementById("demo1").innerHTML = "" + pos.solarPositionLocal.currentSunElevation;
// document.getElementById("demo2").innerHTML = "" + pos.solarPositionLocal.maxSunElevation;
// document.getElementById("demo3").innerHTML = "" + pos.solarPositionLocal.currentSunAzimuth;
// document.getElementById("demo4").innerHTML = "" + NorthSouthEastWest(pos.solarPositionLocal.currentSunAzimuth);
var cse = 

function App() {
  return <div>
    <Item name="current sun elevation:" value="0.00" />
    <Item name="max sun elevation (true):" value="0.00" />
    <Item name="current sun azimuth:" value="0.00" />
    <Item name="current sun azimuth:" value="0.00" />
  </div>;
}

export default App;