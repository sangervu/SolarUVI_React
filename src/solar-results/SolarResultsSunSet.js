import {useState, useEffect} from "react";
import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import {myFunctions} from '../calculations/myFunctions';
import { MathNew } from '../common/utils';

function SolarResultsSunSet(props) {

    const [app, setApp] = useState(
        myFunctions(props)
    );

    useEffect(() => {
        props.childFunc3.current = update
      },)

    function update() {
        setApp(myFunctions(props))
    }

    return (
        <div>
            <br></br>
            <h1 className="App-header">Solar Sunset calculations</h1>
            <p className="item">{"timeRize: "} {MathNew.desimalToTime(app.timeRize)}</p>
            <p className="item">{"timeRizeAstronomical: "} {MathNew.desimalToTime(app.timeRizeAstronomical)}</p>
            <p className="item">{"timeRizeCivil: "} {MathNew.desimalToTime(app.timeRizeCivil)}</p>
            <p className="item">{"timeSetNautical: "} {MathNew.desimalToTime(app.timeSetNautical)}</p>
            <p className="item">{"timeSet: "} {MathNew.desimalToTime(app.timeSet)}</p>
            <p className="item">{"timeSetAstronomical: "} {MathNew.desimalToTime(app.timeSetAstronomical)}</p>
            <p className="item">{"timeSetCivil: "} {MathNew.desimalToTime(app.timeSetCivil)}</p>
            <p className="item">{"timeSetNautical: "} {MathNew.desimalToTime(app.timeSetNautical)}</p>
            <p className="item">{"timeSunSouth: "} {MathNew.desimalToTime(app.timeSunSouth)}</p>
            <p className="item">{"dayLength: "} {MathNew.desimalToTime(app.dayLength)}</p>
        </div>
    )
}
export {SolarResultsSunSet};