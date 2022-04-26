import React, { useState , createContext } from 'react';
import Home from './Home';
import Layout from './Layout';
import MainContext from '../main-page/MainContext';

const UserContext = createContext()

function MainLayout() {

    const [navState, setNavState] = useState({
        uviSelected: true,
        powerSelected: false,
        sunsetSelected: false,
        positionSelected: false,
    });

    const [dateState, setDate] = useState(new Date());

    function changeDate(newdate) {

        const datenow = new Date();
        newdate = new Date(newdate);

        if (newdate.valueOf() === datenow.valueOf()) {
            setDate(datenow);
        }
        else {
            newdate = new Date(newdate.setHours(12));
            setDate(newdate);
        }
    }

    return (
        <MainContext.Provider value={{
            navState, setNavState, changeDate
        }}>
            <Layout>
                <Home />
            </Layout>
        </MainContext.Provider>
    );
}
export default MainLayout;