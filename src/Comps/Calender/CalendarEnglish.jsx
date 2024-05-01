return (
  <div className="container slider-container">
    <div className="row">
      {/* Other content */}
      {epaperData.length > 0 ? (
        <div className="col-lg-8">
          <Slider>
            {epaperData.map((url, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  className="img-fluid"
                  src={`https://ajkal.us/img/epaper/${url.epaper_image}`}
                  alt={`https://ajkal.us/img/epaper/${url.epaper_image}`}
                  onError={(e) => {
                    e.target.src =
                      "https://ajkal.us/image/settings/placeholder.jpg";
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="col-lg-8">
          <p>No epaper data available</p>
        </div>
      )}
      {/* Other content */}
    </div>
  </div>
);
