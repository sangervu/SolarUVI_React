import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import MainContext from '../context/MainContext';

const Clock = () => {
    const [dateFooter, setDate] = useState(new Date());

    const { date, location } = useContext(MainContext);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDate(new Date());
    //     }, 1000);

    //     // Clear timeout if the component is unmounted
    //     return () => clearTimeout(timer);
    // });

    useEffect(() => {
        setDate(date)
    });

    return (
        <div className="row h-100 font-weight-bold" style={{ fontSize: '1.2rem' }}>
            <div className="col-sm-12 my-auto">
                <span>
                    Lokaatio:
                </span>
                <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    {location.lat}{' '}{location.lon}
                </span>
                <span>
                    Laskelmissa käytetty aikavyöhyke, kellonaika ja pvm:
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    {date.toLocaleTimeString("fi-FI")}
                </span>
                <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    {date.toLocaleDateString("fi-FI")}
                </span>
            </div>
        </div>
    )
}

export default Clock;