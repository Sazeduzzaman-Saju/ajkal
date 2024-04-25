import React from 'react';

const BanglaDateTime = ({ dateTime }) => {
  const formatDateToBangla = (dateString) => {
    const banglaNumerals = [
      '০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'
    ];

    const monthsInBangla = [
      "জানুয়ারী",
      "ফেব্রুয়ারী",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "অগাস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর",
    ];

    const daysInBangla = [
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার",
    ];

    const date = new Date(dateString);
    const dayOfWeek = daysInBangla[date.getDay()];
    const day = date.getDate();
    const banglaDay = String(day).split('').map(digit => banglaNumerals[digit]).join('');
    const month = monthsInBangla[date.getMonth()];
    const year = date.getFullYear().toString().split('').map(digit => banglaNumerals[parseInt(digit)]).join('');
    const hours = date.getHours();
    const banglaHours = String(hours).split('').map(digit => banglaNumerals[digit]).join('');
    const minutes = date.getMinutes();
    const banglaMinutes = String(minutes).split('').map(digit => banglaNumerals[digit]).join('');
    const seconds = date.getSeconds();
    const banglaSeconds = String(seconds).split('').map(digit => banglaNumerals[digit]).join('');

    return `${dayOfWeek}, ${banglaDay} ${month} ${year} ${banglaHours}:${banglaMinutes}:${banglaSeconds}`;
  };

  // Format the provided date and time to Bangla
  const banglaDateTime = formatDateToBangla(dateTime);

  return <span className='fw-bold '>{banglaDateTime.slice(0,24)}</span>;
};

export default BanglaDateTime;
