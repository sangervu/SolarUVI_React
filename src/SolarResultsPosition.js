import { useState} from "react";
import React from 'react';
import './styles/style.css';
import './styles/App.css';
import myFunctions from './myFunctions';

function SolarResultsPosition(props) {

    const [app, setApp] = useState(
        myFunctions(props)
    );

    function update() {
        setApp(myFunctions(props))
    }

    const backgroundColor = String(app.uvIndexWarning.backgroundColor);
    const color = String(app.uvIndexWarning.color);

    return (
        <div>
            <div>
                <button onClick={update}>Calculate solar calculations UVI</button>
            </div>
            <h1 className="App-header">Solar Position calculations</h1>
            <p className="item">{"currentSunElevation: "} {app.currentSunElevation}</p>
            <p className="item">{"maximumSunElevation: "} {app.maxSunElevation}</p>
            <p className="item">{"currentSunAzimuth: "} {app.currentSunAzimuth}</p>
            <p className="item">{"azimuthNSEW: "} {app.azimuthNSEW}</p>
            <p className="item">{"latitudePolarNight: "} {app.latitudePolarNight}</p>
        </div>
    )
}
export default SolarResultsPosition;