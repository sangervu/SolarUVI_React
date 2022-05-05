import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import MainContext from '../context/MainContext';

const Clock = () => {
    const [dateFooter, setDate] = useState(new Date());

    const [dateCalc, setDateCalc] = useState(new Date());

    const { date, location } = useContext(MainContext);


    useEffect(() => {
        const timer = setTimeout(() => {
            setDate(new Date());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    useEffect(() => {
       setDateCalc(date)
     });

    return (
        <div className="row h-100 font-weight-bold" style={{ fontSize: '1.2rem' }}>
            <div className="col-sm-12 my-auto">
                <span style={{ marginLeft: '1rem', marginRight: '1rem', color:'blue'}}> 
                    {dateFooter.toLocaleDateString("fi-FI")}{' '}{dateFooter.toLocaleTimeString("fi-FI")}{'   -'}
                </span>
                <span>Lokaatio:</span>
                <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    {location.lat}{' ; '}{location.lon}
                </span>
                <span>
                    Laskelmissa käytetty aikavyöhyke, kellonaika ja pvm:
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    {dateCalc.toLocaleTimeString("fi-FI")}
                </span>
                <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    {dateCalc.toLocaleDateString("fi-FI")}
                </span>
            </div>
        </div>
    )
}

export default Clock;