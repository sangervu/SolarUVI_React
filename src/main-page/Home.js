import React from 'react';
import { useState, useRef, useEffect } from 'react'
import MapMaker from '../map-makers/MapMaker';
import Container from 'react-bootstrap/Container';
import InputLocation from '../input-locations/InputLocation';
import { SolarResultsUVI } from '../solar-results/SolarResultsUVI';
import { SolarResultsPower } from '../solar-results/SolarResultsPower';
import { SolarResultsSunSet } from '../solar-results/SolarResultsSunSet';
import { SolarResultsPosition } from '../solar-results/SolarResultsPosition';
import useTimeZone from '../hooks/useTimeZones';
import { useContext } from "react";
import MainContext from '../context/MainContext';

function Home() {

  const { date, location, navState } = useContext(MainContext);

  const [uviPanelFlexBasis, setUviPanelFlexBasis] = useState('25');
  const [powerPanelFlexBasis, setPowerPanelFlexBasis] = useState('25');
  const [sunsetPanelFlexBasis, setSunsetPanelFlexBasis] = useState('25');
  const [positionPanelFlexBasis, setPositionPanelFlexBasis] = useState('25');

  const emptyContent = navState.powerSelected + navState.sunsetSelected + navState.positionSelected + navState.uviSelected === 0;

  const [dateState, setDate] = useState(new Date());

  useEffect(() => {
    setDate(date)
  }, [date]);

  useEffect(() => {
    setLocation(location)
  }, [location]);

  const [locState, setLocation] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  // const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=60.6034810%2C23.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");
  // const rawOffset = timeZone.rawOffset/60/60;

  useEffect(() => {
    childFunc1.current()
    childFunc2.current()
    childFunc3.current()
    childFunc4.current()
  }, [locState][dateState]);

  const childFunc1 = useRef(null);
  const childFunc2 = useRef(null);
  const childFunc3 = useRef(null);
  const childFunc4 = useRef(null);

  return (
    <div style={{ display: emptyContent ? 'none' : 'block' }} className='home-container'>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <Container fluid>
          <Container className="row" style={{ flexWrap: "nowrap" }}>
            {/* <Container className="col"><InputLocation /></Container> */}

            <div style={{ display: navState.uviSelected ? 'block' : 'none', flexBasis: `${uviPanelFlexBasis}%`  }}>
              <Container className="col">
                <SolarResultsUVI longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc1={childFunc1} />
              </Container>
            </div>

            <div style={{ display: navState.powerSelected ? 'block' : 'none', flexBasis: `${powerPanelFlexBasis}%` }}>
              <Container className="col">
                <SolarResultsPower longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc2={childFunc2} />
              </Container>
            </div>

            <div style={{ display: navState.sunsetSelected ? 'block' : 'none' , flexBasis: `${sunsetPanelFlexBasis}%`}}>
              <Container className="col">
                <SolarResultsSunSet longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc3={childFunc3} />
              </Container>
            </div>

            <div style={{ display: navState.positionSelected ? 'block' : 'none', flexBasis: `${positionPanelFlexBasis}%` }}>
              <Container className="col">
                <SolarResultsPosition longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc4={childFunc4} />
              </Container>
            </div>

            <Container className="col"><MapMaker /></Container>
          </Container>
          <Container className="row">
          </Container>
          <hr />
        </Container >
      </div >
    </div >
  );
}
export default Home;