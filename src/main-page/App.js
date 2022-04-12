import React from 'react';
import { useState, useRef, useEffect } from 'react'
import AppCalendar from '../input-calendar/AppCalendar';
import MapMaker from '../map-makers/MapMaker';
import Container from 'react-bootstrap/Container';
import InputLocation from '../input-locations/InputLocation';
import {SolarResultsUVI} from '../solar-results/SolarResultsUVI';
import {SolarResultsPower} from '../solar-results/SolarResultsPower';
import {SolarResultsSunSet} from '../solar-results/SolarResultsSunSet';
import {SolarResultsPosition} from '../solar-results/SolarResultsPosition';
import NavMenu from './NavMenu';
import useTimeZone from '../hooks/useTimeZones';

function App() {

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

  const [locState, setLocation] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  function changeLocation(newlocation) {
    setLocation({
      lat: newlocation.lat,
      lon: newlocation.lon
    });
  }

  const timeZone = useTimeZone("https://maps.googleapis.com/maps/api/timezone/json?location=62.6034810,23.6822510&timestamp=1331161200&key=AIzaSyC9JoYNE1TRoIwzEp-QB7-l5-eqSILgHmY");

  useEffect(() => {
    childFunc1.current()
    childFunc2.current()
    childFunc3.current()
    childFunc4.current()
  }, [locState]);

  const childFunc1 = useRef(null);
  const childFunc2 = useRef(null);
  const childFunc3 = useRef(null);
  const childFunc4 = useRef(null);

  return (
    <Container className="container">
      <NavMenu></NavMenu>
      <Container className="row">
        <Container className="col"><AppCalendar handleSubmit={changeDate} /></Container>
        <Container className="col"><MapMaker handleMap={changeLocation} /></Container>
        <Container className="col"><InputLocation longitude={locState.lon} latitude={locState.lat} handleChange={changeLocation} />
          <hr />
          {/* <button onClick={() => {
            return (childFunc1.current(), childFunc2.current(), childFunc3.current(), childFunc4.current());
          }}>Calculate Solar Results</button> */}
        </Container>
      </Container>
      <hr />
      <Container className="row">
        <Container className="col"><SolarResultsUVI longitude={locState.lon} latitude={locState.lat} date={dateState} childFunc1={childFunc1} /></Container>
        <Container className="col"><SolarResultsPower longitude={locState.lon} latitude={locState.lat} date={dateState} childFunc2={childFunc2} /></Container>
        <Container className="col"><SolarResultsSunSet longitude={locState.lon} latitude={locState.lat} date={dateState} childFunc3={childFunc3} /></Container>
        <Container className="col"><SolarResultsPosition longitude={locState.lon} latitude={locState.lat} date={dateState} childFunc4={childFunc4} /></Container>
      </Container>
    </Container>
  );
}
export default App;