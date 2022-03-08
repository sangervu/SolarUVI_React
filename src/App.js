import React from 'react';
import { useState } from 'react'
import AppCalendar from './AppCalendar';
import MapMaker from './MapMakers/MapMaker';
import Container from 'react-bootstrap/Container';
import InputLocation from './InputLocation';
import SolarResultsUVI from './SolarResultsUVI';
import SolarResultsPower from './SolarResultsPower';
import SolarResultsSunSet from './SolarResultsSunSet';
import SolarResultsPosition from './SolarResultsPosition';

function App() {

  const [dateState, setDate] = useState(new Date());

  function changeDate(newdate) {
    setDate([...dateState, newdate]);
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

  return (
    <Container className="container">
      <Container className="row">
        <Container className="col"><AppCalendar handleSubmit={changeDate} /></Container>
        <Container className="col"><MapMaker /></Container>
        <Container className="col"><InputLocation handleChange={changeLocation}/></Container>
      </Container>
      <hr/>
      <Container className="row">
        <Container className="col"><SolarResultsUVI longitude={locState.lon} latitude={locState.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsPower longitude={locState.lon} latitude={locState.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsSunSet longitude={locState.lon} latitude={locState.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsPosition longitude={locState.lon} latitude={locState.lat} date={dateState} /></Container>
      </Container>
    </Container>
  );
}
export default App;