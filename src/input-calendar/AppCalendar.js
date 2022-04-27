
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

import {useContext} from "react";
import MainContext from '../context/MainContext';

import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AppCalendar(props) {

  const childToParent = useContext(MainContext);
  const dateNow = new Date();

  const [dateState, setDateState] = useState(dateNow)

  function changeDate(e) {
    setDateState(e);
    props.handleSubmit(e);
  }

  function handleSubmit(event) {
    changeDate(dateNow);
  }

  const data = "This is data from AppCalendar Child Component to the Parent Component."

  return (
    <>
      <ModalHeader toggle={props.toggleModal}>Calendar</ModalHeader>
      <ModalBody>
        <Calendar
          value={dateState}
          onChange={changeDate}
        />
        <p>Current selected date is <b>{moment(props.newDate).format('HH:mm - Do MMMM YYYY')}</b></p>
        <p>Current selected date is <b>{moment(props.newDate).format()}</b></p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit}>Set current date</Button>
        <Button onClick={props.toggleModal}>Peruuta</Button>
        
        <Button primary onClick={() => childToParent(data)}>Click Child</Button>
    
      </ModalFooter>
    </>
  )
}

export default AppCalendar;