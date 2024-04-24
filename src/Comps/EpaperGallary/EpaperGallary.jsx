import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const EpaperGallery = ({ epaperData }) => {
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

  return (
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
                  <button className="epaper-next" onClick={handlePrevious}>
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
  );
};

EpaperGallery.propTypes = {
  epaperData: PropTypes.arrayOf(
    PropTypes.shape({
      epaper_image: PropTypes.string.isRequired,
      epaper_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EpaperGallery;
