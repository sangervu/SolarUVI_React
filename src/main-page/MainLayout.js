import React, { useState, createContext } from 'react';
import Home from './Home';
import Layout from './Layout';
import MainContext from '../context/MainContext';

const UserContext = createContext()

function MainLayout() {

    const [navState, setNavState] = useState({
        uviSelected: true,
        powerSelected: false,
        sunsetSelected: false,
        positionSelected: false,
    });

    const [dateState, setDate] = useState(new Date());

    const childToParent = (childdata) => {
        setDate(childdata);
    }

    return (
        <MainContext.Provider value={childToParent} >
            <Layout>
                <Home date={dateState}/>
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;