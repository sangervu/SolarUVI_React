import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
  const [app, setApp] = useState({
    cse: "0.0",
    mse: "0.0",
    csa: "0.0",
    CSA: "0.0"
  });
  function Item(props) {
    return <div className="item">
      <b>{props.name}</b> <br />
      <b>Degrees:</b> {props.value}
    </div>;
  }
  return <div>
    <Item name="current sun elevation:" value={app.cse} />
    <Item name="max sun elevation (true):" value={app.mse} />
    <Item name="current sun azimuth:" value={app.csa} />
    <Item name="current sun azimuth:" value={app.CSA} />
    <button onClick={updateSolarCalculations}>Update Solar Calculations</button>
  </div>;

  function updateSolarCalculations() {
    setApp(previousState => {
      return { ...previousState, cse: "1.0", mse: "2.0", csa: "3.0", CSA: "4.0" }
    });
  }
}

export default App;