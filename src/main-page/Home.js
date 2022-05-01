import React from 'react';
import { useState, useRef, useEffect } from 'react'
import AppCalendar from '../input-calendar/AppCalendar';
import MapMaker from '../map-makers/MapMaker';
import Container from 'react-bootstrap/Container';
import InputLocation from '../input-locations/InputLocation';
import { SolarResultsUVI } from '../solar-results/SolarResultsUVI';
import { SolarResultsPower } from '../solar-results/SolarResultsPower';
import { SolarResultsSunSet } from '../solar-results/SolarResultsSunSet';
import { SolarResultsPosition } from '../solar-results/SolarResultsPosition';
import useTimeZone from '../hooks/useTimeZones';
import { Button } from 'semantic-ui-react';
import { useContext } from "react";
import MainContext from '../context/MainContext';

function Home(props) {

  const [dateState, setDate] = useState(new Date());

  // useEffect(() => {
  //   setDate(props)
  // },[dateState] );


  const [locState, setLocation] = useState({
    lat: '60.20',
    lon: '24.90',
    timezone: '3'
  });

  function changeLocation(newlocation) {
    setLocation({
      lat: newlocation.lat,
      lon: newlocation.lon,
      timezone: newlocation.timezone
    });
  }
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
    <Container fluid>

      <Container className="row" style={{ flexWrap: "nowrap" }}>
        <Container className="col"><InputLocation longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} handleChange={changeLocation} /></Container>
        <Container className="col"><SolarResultsUVI longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc1={childFunc1} /></Container>
        <Container className="col"><SolarResultsPower longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc2={childFunc2} /></Container>
        <Container className="col"><SolarResultsSunSet longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc3={childFunc3} /></Container>
        <Container className="col"><SolarResultsPosition longitude={locState.lon} latitude={locState.lat} timezone={locState.timezone} date={dateState} childFunc4={childFunc4} /></Container>
        <Container className="col"><MapMaker handleMap={changeLocation} /></Container></Container>
      <Container className="row">
        {/* <Container className="col"><AppCalendar handleSubmit={changeDate} newDate={dateState} /></Container> */}

      </Container>
      <hr />
    </Container>
  );
}
export default Home;