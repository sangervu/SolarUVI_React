import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import myFunctions from './myFunctions';

function App2() {
    const [app, setApp] = useState(
        myFunctions
    );
    return (
        <>
            <h1>Solar calculations</h1>
            <p>{app.currentSunElevation}</p>
            <p>{app.azimuthNSEW}</p>
            <p>{app.currentSunAzimuth}</p>
            <p>{app.dayLength}</p>
            <p>{app.latitudePolarNight}</p>
            <p>{app.maxSunElevation}</p>
            <p>{app.solarPower}</p>
            <p>{app.solarPower}</p>
            <p>{app.solarPowerMax}</p>
            <p>{app.solarPowerMaxAnnual}</p>
            <p>{app.timeRize}</p>
            <p>{app.timeRizeAstronomical}</p>
            <p>{app.timeRizeCivil}</p>
            <p>{app.timeSetNautical}</p>
            <p>{app.timeSet}</p>
            <p>{app.timeSetAstronomical}</p>
            <p>{app.timeSetCivil}</p>
            <p>{app.timeSetNautical}</p>
            <p>{app.timeSunSouth}</p>
            <p>{app.uvIndex}</p>
            <p>{app.uvIndexEnd}</p>
            <p>{app.uvIndexMax}</p>
            <p>{app.uvIndexMaxAnnual}</p>
            <p>{app.uvIndexOverThree}</p>
            <p>{app.uvIndexWarning.backgroundColor}</p>
            <p>{app.uvIndexWarning.color}</p>
            <p>{app.uvIndexWarning.value}</p>
        </>
    )
}
export default App2;