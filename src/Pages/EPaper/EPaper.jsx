import React, { useEffect, useState } from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Epaper.css";
import { FacebookEmbed } from "react-social-media-embed";
import EpaperGallary from "../../Comps/EpaperGallary/EpaperGallary";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const EPaper = () => {
  const [loading, setLoading] = useState(true);
  const [epaperData, setEpaperData] = useState([]);
  const url = "https://backoffice.ajkal.us/all-epapers";

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setEpaperData(response.data.slice(0, 10));
          } else if (Array.isArray(response.data.data)) {
            setEpaperData(response.data.data.slice(0, 12));
          } else {
            console.error(
              "Invalid data structure in API response:",
              response.data
            );
          }
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false on error
        });
    };

    // Fetch data after a delay of 2000 milliseconds (2 seconds)
    const delay = 2000;
    const timer = setTimeout(() => {
      fetchData();
    }, delay);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // State to track modal open/close
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image data

  const currentImage = epaperData[currentImageIndex];

  const handlePrevious = () => {
    const prevIndex =
      currentImageIndex === 0 ? epaperData.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(epaperData[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex =
      currentImageIndex === epaperData.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(epaperData[nextIndex]);
  };

  const isRecentOrCloseToDate = (dateString) => {
    const currentDate = new Date();
    const epaperDate = new Date(dateString);
    const differenceInMs = Math.abs(currentDate - epaperDate);
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
    return differenceInDays <= 7;
  };

  const openModal = () => {
    setModalOpen(true); // Set modal state to open
    setSelectedImage(currentImage); // Set selected image data
  };

  const closeModal = () => {
    setModalOpen(false); // Set modal state to close
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setModalOpen(false);
    }
  };

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
    <div className="container">
      <div className="row">
        {/* Side Bar Area */}
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="">
            <div className="mt-2">
              <PostHeader title="ফিচারস" />
            </div>
            <p className="text-center fw-bold mb-0">আমাদের সাথে থাকুন।</p>
            <div
              className="my-2 pb-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {loading ? ( // Render skeleton loader while loading
                <Skeleton height={250} width={305} />
              ) : (
                <FacebookEmbed
                  url="https://www.facebook.com/photo/?fbid=979852766901979"
                  width={305}
                />
              )}
            </div>
            <div>
              {/* Sidebar Advertisement */}
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://i.pinimg.com/originals/6b/09/f8/6b09f8c066f90cc82af0b9f99cb401d5.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://vriddle.com/wp-content/uploads/2018/04/JScrew-ice-cream-email-template.gif"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid "
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cdd8bd99001381.5ee904eb9b5ca.gif"
                  alt=""
                />
              </div>
              {/* Sidebar Advertisement End */}
            </div>
          </div>
        </div>
        {/* Main Epaper Area */}
        <div className="col-lg-8 px-0 pb-3">
          <div>
            {epaperData.length > 0 && (
              <div className="epaper-slider-container">
                <img
                  className="epaper-image img-fluid"
                  src={`https://ajkal.us/img/epaper/${currentImage.epaper_image}`}
                  alt=""
                  onClick={openModal}
                />
              </div>
            )}
            <div className="d-flex justify-content-between align-items-center pt-2 px-5">
              <button className="epaper-next" onClick={handlePrevious}>
                <div className="d-flex align-content-center">
                  <p className="mb-0">
                    <FaArrowLeftLong className="pe-2 mb-0 pb-0" size={25} />
                  </p>
                  <p className="mb-0">আগের পাতা</p>
                </div>
              </button>
              <p className="mb-0">আগে ও পরের পাতা দেখতে ক্লিক করুন।</p>
              <button className="epaper-next" onClick={handleNext}>
                <div className="d-flex align-content-center">
                  <p className="mb-0">পরের পাতা</p>
                  <p className="mb-0">
                    <FaArrowRightLong className="ps-2 mb-0 pb-0" size={25} />
                  </p>
                </div>
              </button>
            </div>
            {/* Conditionally render modal based on state */}
            {modalOpen && (
              <div
                className="modal-backdrop fade show"
                style={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                onClick={handleBackdropClick}
              >
                {/* Close modal when clicking outside of it */}
                <div className="modal fade show" style={{ display: "block" }}>
                  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalTitleId">
                          {selectedImage.name}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                        />
                      </div>
                      <div className="modal-body">
                        {/* Render selected image in modal body */}
                        {selectedImage && (
                          <img
                            src={`https://ajkal.us/img/epaper/${selectedImage.epaper_image}`}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button
                          className="epaper-next"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        <button className="epaper-next" onClick={handleNext}>
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right Side Sidebar Area */}
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="mt-2">
            <PostHeader title="সকল পাতা" />
          </div>
          <div>
            <div className="card border-0 shadow-sm epaper-scroll-bar">
              <div className="card-body epaper-all p-0">
                {loading ? (
                  // Render skeleton loading
                  <div className="skeleton-loading">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-text"></div>
                  </div>
                ) : (
                  // Render data when not loading
                  epaperData.map((item, index) => (
                    <a
                      key={index}
                      href={`https://backoffice.ajkal.us/epaper-detail/${item.id}`}
                      className="epaper-sidebar-img"
                    >
                      <img
                        className="img-fluid w-100 mt-4"
                        src={`https://ajkal.us/img/epaper/${item.epaper_image}`}
                        alt=""
                      />
                      <p className="mb-0 text-center epaper-sidebar-title">
                        {item.name}
                      </p>
                    </a>
                  ))
                )}
              </div>
            </div>
            <div className="pb-2">
              <p className="text-center fw-bold pt-4">আজকের ইপেপার</p>
              <div className="react-calendar-box">
                <Calendar
                  onChange={handleDateChange}
                  value={value}
                  className="border-0 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPaper;
