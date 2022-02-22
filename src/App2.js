import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './App.css';
import myFunctions from './myFunctions';

function App2(props) {
    let lat = props.latitude;
    let lon = props.longitude;
    const [app, setApp] = useState(
        myFunctions
    );

    return (
        <div>
            <h1 className="App-header">Solar calculations</h1>
            <p className="item">{"currentSunElevation: "} {app.currentSunElevation}</p>
            <p className="item">{"azimuthNSEW: "} {app.azimuthNSEW}</p>
            <p className="item">{"currentSunAzimuth: "} {app.currentSunAzimuth}</p>
            <p className="item">{"dayLength: "} {app.dayLength}</p>
            <p className="item">{"latitudePolarNight: "} {app.latitudePolarNight}</p>
            <p className="item">{"maxSunElevation: "} {app.maxSunElevation}</p>
            <p className="item">{"solarPower: "} {app.solarPower}</p>
            <p className="item">{"solarPowerAquired: "} {app.solarPowerAquired}</p>
            <p className="item">{"solarPowerMax: "} {app.solarPowerMax}</p>
            <p className="item">{"solarPowerMaxAnnual: "} {app.solarPowerMaxAnnual}</p>
            <p className="item">{"timeRize: "} {app.timeRize}</p>
            <p className="item">{"timeRizeAstronomical: "} {app.timeRizeAstronomical}</p>
            <p className="item">{"timeRizeCivil: "} {app.timeRizeCivil}</p>
            <p className="item">{"timeSetNautical: "} {app.timeSetNautical}</p>
            <p className="item">{"timeSet: "} {app.timeSet}</p>
            <p className="item">{"timeSetAstronomical: "} {app.timeSetAstronomical}</p>
            <p className="item">{"timeSetCivil: "} {app.timeSetCivil}</p>
            <p className="item">{"timeSetNautical: "} {app.timeSetNautical}</p>
            <p className="item">{"timeSunSouth: "} {app.timeSunSouth}</p>
            <p className="item">{"uvIndex: "} {app.uvIndex}</p>
            <p className="item">{"uvIndexEnd: "} {app.uvIndexEnd}</p>
            <p className="item">{"uvIndexMax: "} {app.uvIndexMax}</p>
            <p className="item">{"uvIndexMaxAnnual: "} {app.uvIndexMaxAnnual}</p>
            <p className="item">{"uvIndexOverThree: "} {app.uvIndexOverThree}</p>
            <p className="item">{"uvIndexWarning.backgroundColor: "} {app.uvIndexWarning.backgroundColor}</p>
            <p className="item">{"uvIndexWarning.color: "} {app.uvIndexWarning.color}</p>
            <p className="item">{"uvIndexWarning.value: "} {app.uvIndexWarning.value}</p>
        </div>
    )
}
export default App2;