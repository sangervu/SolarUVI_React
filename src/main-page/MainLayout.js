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

    const childToParent = (childdata) => {
        setDate(new Date(childdata));
    }

    return (
        <MainContext.Provider value={{date,navState, setNavState, childToParent}}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;