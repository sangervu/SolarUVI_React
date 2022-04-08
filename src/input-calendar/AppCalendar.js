
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function AppCalendar(props) {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
    props.handleSubmit(e);
  }
  function handleSubmit(event) {
   changeDate(new Date());
  }

  return (
    <>
        <Calendar
          value={dateState}
          onChange={changeDate}
        />
        <p>Current selected date is <b>{moment(dateState).format('hh:mm - Do MMMM YYYY')}</b></p>
        <br></br>
        <button onClick={handleSubmit}>Set current date</button>
    </>
  )
}