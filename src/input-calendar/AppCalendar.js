
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

import { useContext } from "react";
import MainContext from '../context/MainContext';

import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AppCalendar(props) {

  const {dateToParent} = useContext(MainContext); 

  const [dateStateNow, setDateStateNow] = useState(new Date())
  const [dateStateCalendar, setDateState] = useState(new Date())

  function changeDate(e) {
    setDateState(e);
    // props.handleSubmit(e);
  }

  function handleSubmit(event) {
    changeDate(dateStateNow);
  }

  const isNow = () => {
    if (dateStateNow.valueOf() === dateStateCalendar.valueOf()) {
      return true
    }
    else {
      return false
    }
  };

  const isNowDate = (date) => {
    if (date.valueOf() === dateStateNow.valueOf()) {
      return date
    }
    else {
      return date.setHours(12)
    }
  };

  return (
    <>
      <ModalHeader toggle={props.toggleModal}>Calendar</ModalHeader>
      <ModalBody>
        <Calendar
          value={dateStateCalendar}
          onChange={changeDate}
        />
        {isNow() ? <p>Current selected date: is <b>{moment(dateStateCalendar).format('HH:mm - Do MMMM YYYY')}</b></p> : <p>Current selected date is <b>{moment(dateStateCalendar.setHours(12)).format('HH:mm - Do MMMM YYYY')}</b></p>}
        {isNow() ? <p>Local Time Zone: <b>{'['}{dateStateCalendar.getTimezoneOffset()/60}{']'}{' '}{Intl.DateTimeFormat().resolvedOptions().timeZone}</b></p> : <p>Selected Time Zone <b>{moment(dateStateCalendar.setHours(12)).format()}</b></p>}

      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSubmit}>Current date</Button>
        <Button onClick={props.toggleModal}>Close</Button>
        <Button primary onClick={() => dateToParent(moment(isNowDate(dateStateCalendar)).format())}>Use date selected</Button>
      </ModalFooter>
    </>
  )
}

export default AppCalendar;