import React from "react";
import { IoMdTimer } from "react-icons/io";

const BanglaTime = ({ time }) => {
  if (!time) {
    return <span>No time provided</span>;
  }

  const convertToBanglaNumerals = (timeString) => {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const [hours, minutes, seconds] = timeString
      .split(":")
      .map((numStr) => numStr.padStart(2, "0"));

    let hour = parseInt(hours);
    const ampm = hour >= 12 ? "পিএম" : "এএম";
    hour = hour % 12 || 12; // Convert hour to 12-hour format

    const banglaHours = hour
      .toString()
      .split("")
      .map((digit) => banglaNumerals[digit])
      .join("");
    const banglaMinutes = minutes
      .split("")
      .map((digit) => banglaNumerals[digit])
      .join("");
    const banglaSeconds = seconds
      .split("")
      .map((digit) => banglaNumerals[digit])
      .join("");

    return `${banglaHours}:${banglaMinutes}: ${ampm}`;
  };

  const banglaTime = convertToBanglaNumerals(time);

  return <span className="secondary-color"><IoMdTimer/> {banglaTime}</span>;
};

export default BanglaTime;
