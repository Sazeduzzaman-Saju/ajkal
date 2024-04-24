import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarEnglish.css";

function CalendarEngliash() {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    // Adjusting the date to local time zone before formatting
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    const formattedDate = adjustedDate.toISOString().substr(0, 10);
    setValue(adjustedDate); // Update the state with adjustedDate
    console.log("Selected date:", formattedDate);

    // Constructing the URL using the formatted date
    const dateWiseEpaper = `https://backoffice.ajkal.us/date-epapers/${formattedDate}`;
    console.log("URL:", dateWiseEpaper);

    // You can perform additional actions with the formatted date here if needed
  };

  return (
    <>
      <p className="text-center fw-bold pt-4">আজকের ইপেপার</p>
      <div className="react-calendar-box">
        <Calendar
          onChange={handleDateChange}
          value={value}
          className="border-0 shadow-sm"
        />
      </div>
    </>
  );
}

export default CalendarEngliash;
