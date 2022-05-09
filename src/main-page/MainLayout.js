import React, { useState, useEffect } from 'react';
import Home from './Home';
import Layout from './Layout';
import MainContext from '../context/MainContext';
import useTimeZone from '../hooks/useTimeZones';

function MainLayout() {

    const [navState, setNavState] = useState({
        uviSelected: true,
        powerSelected: true,
        sunsetSelected: true,
        positionSelected: true,
    });

    const [timeZoneData, setTimeZoneData] = useState({});

    const [date, setDate] = useState(new Date());

    const [tzChecked, setChecked] = useState(true);
    const tzSelectToParent = () => {

        setChecked(!tzChecked);
    };

    const dateToParent = (childdata) => {
        setDate(new Date(childdata));
    }

    const [location, setLocation] = useState({
        lat: '60.20',
        lon: '24.90',
        timezone: '3'
    });

    const latitude = Number(location.lat).toFixed(7);
    const longitude = Number(location.lon).toFixed(7);
    const key = "AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY";

    //Time Zone request API: https://developers.google.com/maps/documentation/timezone/requests-timezone?hl=en#requests
    // "https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY"

    const urlString = "https://maps.googleapis.com/maps/api/timezone/json?location=" + latitude + "%2C" + longitude + "&timestamp=" + Math.floor(date.valueOf() / 1000) + "&key=" + key;
    const tzData = useTimeZone(urlString);

    useEffect(() => {
        tzChecked && setTimeZoneData(tzData)
    }, );


    const mapCenter = {
        lat: Number(location.lat),
        lng: Number(location.lon)
    };

    const [mapZoom, setMapZoom] = useState(10);

    const locToParent = (newlocation) => {
        setLocation({
            lat: newlocation.lat,
            lon: newlocation.lon,
            timezone: newlocation.timezone
        })
        setMapZoom(10);
    }

    function mapToParent(maplocation) {
        setLocation({
            lat: maplocation.lat,
            lon: maplocation.lon,
            timezone: maplocation.timezone
        })
        setMapZoom(10);
        ;
    }

    return (
        <MainContext.Provider value={{ date, location, navState, mapCenter, tzChecked, mapZoom, timeZoneData, setNavState, dateToParent, locToParent, mapToParent, tzSelectToParent }}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;