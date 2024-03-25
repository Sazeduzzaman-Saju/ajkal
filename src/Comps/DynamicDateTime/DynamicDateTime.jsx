import React, { useEffect, useState } from "react";
import { getDate } from "bangla-calendar";

const DynamicDateTime = ({ dynamicDate }) => {
  const [banglaDate, setBanglaDate] = useState("");
  const [englishDate, setEnglishDate] = useState("");

  useEffect(() => {
    // If dynamicDate is not provided, use the current date
    const date1 = dynamicDate ? new Date(dynamicDate) : new Date();

    // Using getDate function
    const fullBanglaDate = getDate(date1);
    setBanglaDate(fullBanglaDate);

    // Format English date in Bangla font
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedEnglishDate = date1.toLocaleDateString("en-US", options)
      .replace(/0/g, "০")
      .replace(/1/g, "১")
      .replace(/2/g, "২")
      .replace(/3/g, "৩")
      .replace(/4/g, "৪")
      .replace(/5/g, "৫")
      .replace(/6/g, "৬")
      .replace(/7/g, "৭")
      .replace(/8/g, "৮")
      .replace(/9/g, "৯");

    // Mapping for English month names to Bangla month names
    const monthMapping = {
      January: "জানুয়ারি",
      February: "ফেব্রুয়ারি",
      March: "মার্চ",
      April: "এপ্রিল",
      May: "মে",
      June: "জুন",
      July: "জুলাই",
      August: "আগস্ট",
      September: "সেপ্টেম্বর",
      October: "অক্টোবর",
      November: "নভেম্বর",
      December: "ডিসেম্বর",
    };

    const banglaMonth = Object.keys(monthMapping).reduce(
      (acc, key) => acc.replace(key, monthMapping[key]),
      formattedEnglishDate
    );

    setEnglishDate(banglaMonth);
  }, [dynamicDate]);

  return (
    <div className="banglaDateTime">
      <p className="mb-0"></p>
      <p className="mb-0">{englishDate}, {banglaDate} বঙ্গাব্দ</p>
    </div>
  );
};

export default DynamicDateTime;
