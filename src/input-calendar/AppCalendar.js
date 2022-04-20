
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function AppCalendar(props) {

  const dateNow = new Date();

  const [dateState, setDateState] = useState(dateNow)
  function changeDate(e) {
    setDateState(e);
    props.handleSubmit(e);
  }

  function handleSubmit(event) {
   changeDate(dateNow);
  }

  return (
    <>
        <Calendar
          value={dateState}
          onChange={changeDate}
        />
        <p>Current selected date is <b>{moment(props.newDate).format('HH:mm - Do MMMM YYYY')}</b></p>
        <p>Current selected date is <b>{moment(props.newDate).format()}</b></p>
        <br></br>
        <button onClick={handleSubmit}>Set current date</button>
    </>
  )
}