import React, { useState, useEffect } from 'react';
import Home from './Home';
import Layout from './Layout';
import MainContext from '../context/MainContext';

function MainLayout() {

    const [navState, setNavState] = useState({
        uviSelected: true,
        powerSelected: true,
        sunsetSelected: true,
        positionSelected: true,
    });

    const [date, setDate] = useState(new Date());

    const timezoneState = true;

    const dateToParent = (childdata) => {
        setDate(new Date(childdata));
    }

    const [location, setLocation] = useState({
        lat: '60.20',
        lon: '24.90',
        timezone: '3'
    });

    const mapCenter = {
        lat: Number(location.lat),
        lng: Number(location.lon)
    };

    const locToParent = (newlocation) => {
        setLocation({
            lat: newlocation.lat,
            lon: newlocation.lon,
            timezone: newlocation.timezone
        });
    }

    function mapToParent(maplocation) {
        setLocation({
          lat: maplocation.lat,
          lon: maplocation.lon,
          timezone: maplocation.timezone
        });
      }

    return (
        <MainContext.Provider value={{ date, location, navState, mapCenter, timezoneState, setNavState, dateToParent, locToParent, mapToParent }}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;