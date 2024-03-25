import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarEnglish.css'


function CalendarEngliash() {
    const [value, onChange] = useState(new Date());

  return (
    <>
    <p className='text-center fw-bold pt-4'>আজকের ইপেপার</p>
    <div className='react-calendar-box'>
      <Calendar onChange={onChange} value={value} className='border-0 shadow-sm'/>
    </div>
    </>
  );
}

export default CalendarEngliash;
