
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AppCalendar(props) {

  const dateNow = new Date();

  const [dateState, setDateState] = useState(dateNow)
  function changeDate(e) {
    setDateState(e);
    // props.handleSubmit(e);
  }

  function handleSubmit(event) {
    changeDate(dateNow);
  }

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
      </ModalFooter>
    </>
  )
}

export default AppCalendar;