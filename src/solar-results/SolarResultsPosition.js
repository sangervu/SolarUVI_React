import {useState, useEffect} from "react";
import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import {myFunctions} from '../calculations/myFunctions';

function SolarResultsPosition(props) {

    const [app, setApp] = useState(
        myFunctions(props)
    );
    
    useEffect(() => {
        props.childFunc4.current = update
      },)

    function update() {
        setApp(myFunctions(props))
    }

    return (
        <div>
            <br></br>
            <h1 className="App-header">Solar Position calculations</h1>
            <p className="item">{"currentSunElevation: "} {app.currentSunElevation}</p>
            <p className="item">{"maximumSunElevation: "} {app.maxSunElevation}</p>
            <p className="item">{"currentSunAzimuth: "} {app.currentSunAzimuth}</p>
            <p className="item">{"azimuthNSEW: "} {app.azimuthNSEW}</p>
            <p className="item">{"latitudePolarNight (north): "} {app.latitudePolarNightNorth}</p>
            <p className="item">{"latitudePolarNight (south): "} {app.latitudePolarNightSouth}</p>
        </div>
    )
}
export {SolarResultsPosition};