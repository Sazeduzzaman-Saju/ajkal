import React, { useEffect, useState } from 'react';

const BanglaTimeDifference = ({ days }) => {
  const convertToBanglaNumerals = (number) => {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return number.toString().split('').map(digit => banglaNumerals[digit]).join('');
  };

  const banglaDays = convertToBanglaNumerals(days);
  const suffix = 'দিন আগে';

  return (
    <span>{banglaDays} {suffix}</span>
  );
};

const BanglaTimeAgo = ({ postTime }) => {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const currentTime = new Date();
      const postDateTime = new Date(postTime);
      const differenceInMilliseconds = currentTime.getTime() - postDateTime.getTime();

      // Convert the difference into days and round it to the nearest integer
      const differenceInDays = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24));

      setTimeDifference(differenceInDays);
    };

    calculateTimeDifference();

    // Recalculate the time difference every minute
    const interval = setInterval(calculateTimeDifference, 60000);

    return () => clearInterval(interval);
  }, [postTime]);

  return (
    <span>{timeDifference > 0 ? <BanglaTimeDifference days={timeDifference} /> : 'এই মুহূর্তে'}</span>
  );
};

export default BanglaTimeAgo;
