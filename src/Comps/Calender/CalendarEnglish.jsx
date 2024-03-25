import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CalendarEngliash() {
    const [value, onChange] = useState(new Date());

  return (
    <div className=''>
      <Calendar onChange={onChange} value={value} className='border-0 shadow-sm'/>
    </div>
  );
}

export default CalendarEngliash;
