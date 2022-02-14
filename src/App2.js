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
            <p>{"currentSunElevation: "} {app.currentSunElevation}</p>
            <p>{"azimuthNSEW: "} {app.azimuthNSEW}</p>
            <p>{"currentSunAzimuth: "} {app.currentSunAzimuth}</p>
            <p>{"dayLength: "} {app.dayLength}</p>
            <p>{"latitudePolarNight: "} {app.latitudePolarNight}</p>
            <p>{"maxSunElevation: "} {app.maxSunElevation}</p>
            <p>{"solarPower: "} {app.solarPower}</p>
            <p>{"solarPowerAquired: "} {app.solarPowerAquired}</p>
            <p>{"solarPowerMax: "} {app.solarPowerMax}</p>
            <p>{"solarPowerMaxAnnual: "} {app.solarPowerMaxAnnual}</p>
            <p>{"timeRize: "} {app.timeRize}</p>
            <p>{"timeRizeAstronomical: "} {app.timeRizeAstronomical}</p>
            <p>{"timeRizeCivil: "} {app.timeRizeCivil}</p>
            <p>{"timeSetNautical: "} {app.timeSetNautical}</p>
            <p>{"timeSet: "} {app.timeSet}</p>
            <p>{"timeSetAstronomical: "} {app.timeSetAstronomical}</p>
            <p>{"timeSetCivil: "} {app.timeSetCivil}</p>
            <p>{"timeSetNautical: "} {app.timeSetNautical}</p>
            <p>{"timeSunSouth: "} {app.timeSunSouth}</p>
            <p>{"uvIndex: "} {app.uvIndex}</p>
            <p>{"uvIndexEnd: "} {app.uvIndexEnd}</p>
            <p>{"uvIndexMax: "} {app.uvIndexMax}</p>
            <p>{"uvIndexMaxAnnual: "} {app.uvIndexMaxAnnual}</p>
            <p>{"uvIndexOverThree: "} {app.uvIndexOverThree}</p>
            <p>{"uvIndexWarning.backgroundColor: "} {app.uvIndexWarning.backgroundColor}</p>
            <p>{"uvIndexWarning.color: "} {app.uvIndexWarning.color}</p>
            <p>{"uvIndexWarning.value: "} {app.uvIndexWarning.value}</p>
        </>
    )
}
export default App2;