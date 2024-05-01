import React, { useState, useEffect } from "react";
import { FacebookEmbed } from "react-social-media-embed";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Calendar from "react-calendar";
import axios from "axios";
import { Button, Modal } from "bootstrap";

function DateEpaper() {
  const [value, setValue] = useState(""); // Updated to an empty string initially
  const [loading, setLoading] = useState(true);
  const [epaperData, setEpaperData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateChange = async (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setValue(formattedDate); // Set the formatted date directly

    // Fetch data using the formatted date
    try {
      setLoading(true);
      const response = await axios.get(
        `https://backoffice.ajkal.us/date-epapers/${formattedDate}`
      );
      if (Array.isArray(response.data)) {
        setEpaperData(response.data);
      } else if (Array.isArray(response.data.data)) {
        setEpaperData(response.data.data);
      } else {
        console.error("Invalid data structure in API response:", response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Set default date to current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setValue(formattedDate);
    handleDateChange(currentDate);
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  return (
    <div className="container slider-container">
      <div className="row">
        <div className="col-lg-3 px-0 shadow-sm">
          <div className="mt-4">
            <div className="dropdown px-0">
              <Link
                to={"/epaper"}
                className="btn btn-danger rounded-0 w-100 fw-bold"
              >
                আজকের পত্রিকা দেখুন।
              </Link>
            </div>
            <div className="shadow-sm m-2">
              <p className="text-center fw-bold pt-4 text-danger rounded-0 w-100 fw-bold">
                পুরনো পেপার দেখতে ক্যালেন্ডার এর তারিখ নির্বাচন করুন।
              </p>
              <div className="react-calendar-box shadow-none">
                <Calendar
                  onChange={handleDateChange}
                  value={value}
                  className="border-0"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-2">
              <PostHeader title="ফিচারস" />
            </div>
            <p className="text-center fw-bold mb-0">আমাদের সাথে থাকুন।</p>
            <div
              className="my-2 pb-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FacebookEmbed
                url="https://www.facebook.com/photo/?fbid=979852766901979"
                width={305}
              />
            </div>
          </div>
        </div>
        {/* Other content */}
        {epaperData.length > 0 ? (
          <div className="col-lg-9">
            <Slider>
              {epaperData.map((url, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <img
                    className="img-fluid"
                    src={`https://ajkal.us/img/epaper/${url.epaper_image}`}
                    alt={`https://ajkal.us/img/epaper/${url.epaper_image}`}
                    onClick={handleShow}
                    type="button"
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                </div>
              ))}
              {/* Modal */}
              {/* {epaperData.map((url, index) => (
                  <Modal show={show} onHide={handleClose} key={index}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Woohoo, you are reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                <div key={index}>
                </div>
              ))} */}
            </Slider>
          </div>
        ) : (
          <div className="col-lg-9 text-center ">
            <div className="no-data-epaper">
              <a className="navbar-brand" href="/">
                <img src="https://ajkal.us/image/settings/logo_red.png" alt  />
              </a>
              <h5 className="text-center mt-3">
                এই{" "}
                <span className="text-danger">
                  {new Date(value).toLocaleDateString()}
                </span>{" "}
                নির্বাচিত তারিখে কোনও ই-পেপার ডেটা উপলব্ধ নেই
              </h5>
            </div>
          </div>
        )}
        {/* Other content */}
      </div>
    </div>
  );
}

export default DateEpaper;
