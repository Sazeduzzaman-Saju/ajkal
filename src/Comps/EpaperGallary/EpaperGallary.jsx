import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const EpaperGallery = ({ epaperData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? epaperData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === epaperData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="epaper-slider-container">
        <img
          className="epaper-image img-fluid "
          src={epaperData[currentImageIndex].imageURL}
          alt=""
        />
      </div>
      <div className="d-flex justify-content-between align-items-center pt-2 px-5">
        <button className="epaper-next" onClick={handlePrevious}>
          <div className=" d-flex align-content-center ">
            <p className="mb-0">
              <FaArrowLeftLong className="pe-2 mb-0 pb-0" size={25} />{" "}
            </p>
            <p className="mb-0">আগের পাতা</p>
          </div>
        </button>
        <p className="mb-0">আগে ও পরের পাতা দেখতে ক্লিক করুন।</p>
        <button className="epaper-next" onClick={handleNext}>
          <div className="d-flex align-content-center ">
            <p className="mb-0">পরের পাতা</p>
            <p className="mb-0">
              <FaArrowRightLong className="ps-2 mb-0 pb-0" size={25} />
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

EpaperGallery.propTypes = {
  epaperData: PropTypes.arrayOf(
    PropTypes.shape({
      imageURL: PropTypes.string.isRequired
    })
  ).isRequired
};

export default EpaperGallery;
