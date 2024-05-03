import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";

const PrayerTimeComponent = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: null,
    Dhuhr: null,
    Asr: null,
    Maghrib: null,
    Isha: null,
    Sunrise: null,
    Sunset: null,
  });
  const [error, setError] = useState(null);

  // Function to convert a numeric string to Bangla numerals
  const toBanglaNumerals = (numericString) => {
    const banglaNumerals = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    return numericString.replace(/\d/g, (digit) => banglaNumerals[digit]);
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "http://api.aladhan.com/v1/timingsByCity?city=DHAKA&country=BANGLADESH&method=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch prayer times");
        }
        const data = await response.json();
        // Convert numeric time values to Bangla numerals
        const prayerTimesInBangla = {};
        for (const [key, value] of Object.entries(data.data.timings)) {
          prayerTimesInBangla[key] = toBanglaNumerals(value);
        }
        setPrayerTimes(prayerTimesInBangla);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setError("Failed to fetch prayer times");
      }
    };

    fetchPrayerTimes();

    // Refresh the prayer times every minute
    const interval = setInterval(() => {
      fetchPrayerTimes();
    }, 60000);

    // Cleanup interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-3" style={{ backgroundColor: "#dc2329" }}>
        <h4 className="py-2 mb-0 text-center text-white">নামাজের সময়</h4>
      </div>
      <div className="row gx-0">
        <div className="col-lg-6">
          <LazyImageShortNews
            src={`https://www.jugantor.com/web-assets/img/prayertimebg3.png`}
            alt="epaper link"
            className="img-fluid w-100 rounded-0"
            errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
            width="100%"
            height="248px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6">
          {error ? (
            <p>ত্রুটি: {error}</p>
          ) : (
            <ul className="ps-0">
              <li className="main-bg text-white mb-1 p-1 d-flex justify-content-between px-3">
                <span>ফজর:</span>{" "}
                <span className="text-white fw-bold">{prayerTimes.Fajr}</span>
              </li>
              <li className="bg-light mb-1 p-1 d-flex justify-content-between px-3">
                <span>জোহর:</span>{" "}
                <span className="text-black fw-bold">{prayerTimes.Dhuhr}</span>
              </li>
              <li className="main-bg text-white mb-1 p-1 d-flex justify-content-between px-3">
                <span>আসর:</span>{" "}
                <span className="text-white fw-bold">{prayerTimes.Asr}</span>
              </li>
              <li className="bg-light mb-1 p-1 d-flex justify-content-between px-3">
                <span>মাগরিব:</span>{" "}
                <span className="text-black fw-bold">
                  {prayerTimes.Maghrib}
                </span>
              </li>
              <li className="main-bg text-white mb-1 p-1 d-flex justify-content-between px-3">
                <span>ইশা:</span>{" "}
                <span className="text-white fw-bold">{prayerTimes.Isha}</span>
              </li>
              <li className="bg-light mb-1 p-1 d-flex justify-content-between px-3">
                <span>সূর্যাস্ত : </span>
                <span className="text-black fw-bold">
                  {prayerTimes.Sunrise}
                </span>
              </li>
              <li className="main-bg text-white mb-1 p-1 d-flex justify-content-between px-3">
                <span>সূর্যোদয়:</span> <span>{prayerTimes.Sunset}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="border shadow-sm"
            style={{ height: "425px", overflow: "hidden" }}
          >
            <h3 className="text-center pt-3">
              আজকাল <span className="epaper_text">ই</span> পেপার
            </h3>
            <Link to={"/epaper"} className="">
              <img
                className="img-fluid"
                src="https://ajkal.us/img/epaper/17139742637427437.jpg"
                alt=""
              />
              <LazyImageShortNews
                src={`https://www.jugantor.com/web-assets/img/prayertimebg3.png`}
                alt="epaper link"
                className="img-fluid w-100 rounded-0"
                errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                width="100%"
                height="248px"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimeComponent;
