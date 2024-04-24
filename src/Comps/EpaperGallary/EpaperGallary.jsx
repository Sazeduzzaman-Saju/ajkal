import React from "react";

const EpaperGallery = (epaper_image, nav2) => {
  return (
    <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
      {epaperData.map((item, index) => (
        <div key={index}>
          <img
            className="img-fluid"
            src={`https://ajkal.us/img/epaper/${item.epaper_image}`}
          />
        </div>
      ))}
    </Slider>
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
