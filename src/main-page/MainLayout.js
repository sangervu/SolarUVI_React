import React, { useState, createContext } from 'react';
import Home from './Home';
import Layout from './Layout';
import MainContext from '../context/MainContext';

function MainLayout() {

    const [navState, setNavState] = useState({
        uviSelected: true,
        powerSelected: false,
        sunsetSelected: false,
        positionSelected: false,
    });

    const [date, setDate] = useState(new Date());

    const dateToParent = (childdata) => {
        setDate(new Date(childdata));
    }

    const [location, setLocation] = useState({
        lat: '60.20',
        lon: '24.90',
        timezone: '3'
    });

    const locToParent = (newlocation) => {
        setLocation({
            lat: newlocation.lat,
            lon: newlocation.lon,
            timezone: newlocation.timezone
        });
    }

    return (
        <MainContext.Provider value={{ date, location, navState, setNavState, dateToParent, locToParent }}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;