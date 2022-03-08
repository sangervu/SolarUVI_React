import React from 'react';
import { useState } from 'react'
import AppCalendar from './AppCalendar';
import MapMaker from './MapMakers/MapMaker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputLocation from './InputLocation';
import SolarResultsUVI from './SolarResultsUVI';
import SolarResultsPower from './SolarResultsPower';
import SolarResultsSunSet from './SolarResultsSunSet';
import SolarResultsPosition from './SolarResultsPosition';

function App() {

  const [dateState, setDateState] = useState(new Date());

  function changeDate(newdate) {
    setDateState([...dateState, newdate]);
  }

  const [inputs, setInputs] = useState({
    lat: '60.20',
    lon: '24.90'
  });

  return (
    <Container className="container">
      <Container className="row">
        <Container className="col"><AppCalendar handleSubmit={changeDate} /></Container>
        <Container className="col"><MapMaker /></Container>
        <Container className="col"><InputLocation /></Container>
      </Container>
      <hr/>
      <Container className="row">
        <Container className="col"><SolarResultsUVI longitude={inputs.lon} latitude={inputs.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsPower longitude={inputs.lon} latitude={inputs.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsSunSet longitude={inputs.lon} latitude={inputs.lat} date={dateState} /></Container>
        <Container className="col"><SolarResultsPosition longitude={inputs.lon} latitude={inputs.lat} date={dateState} /></Container>
      </Container>
    </Container>
  );
}
export default App;