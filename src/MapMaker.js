import React from "react";
import ReactDOM from "react-dom";
import SimpleMap from "./Map";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
const locations = require("./locations.json");

function MapMaker() {
  return (
    <div className="App">
      <SimpleMap locations={locations} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <MapMaker />
  </BrowserRouter>,
  rootElement
);

export default MapMaker


//https://developers.google.com/maps/documentation/javascript/react-map