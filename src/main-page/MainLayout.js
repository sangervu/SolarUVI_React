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

    const [tzChecked, setChecked] = React.useState(true);

    const tzSelectToParent = () => {
        setChecked(!tzChecked);
      };

    const timezoneState = tzChecked;
 

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
        <MainContext.Provider value={{ date, location, navState, mapCenter, timezoneState, mapZoom, setNavState, dateToParent, locToParent, mapToParent, tzSelectToParent }}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;