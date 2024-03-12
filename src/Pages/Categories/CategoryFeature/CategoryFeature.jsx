import React from "react";
import CategoryNewsSlider from "./CategoryNewsSlider";
import PropTypes from "prop-types";

const CategoryFeature = ({ singleNews }) => {
  console.log(singleNews);
  return (
    <div className="col-lg-8">
      <div className="row gx-3">
        <div className="col-sm-8 mb-3">
          <CategoryNewsSlider />
        </div>
        {singleNews.map((data) => (
          <div className="col-sm-4" key={data.id}>
            <div className="card rounded-0 border-0 shadow-sm ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="card-img-top"
                    src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h5 className="pt-2 main_color">{data.news_title.slice(0,24)}</h5>
                  <p className="">
                    {data.news_short_brief.slice(0,59)}...
                  </p>
                  <p className="text-muted mb-1" style={{fontSize: '12px'}}>{data.news_time.slice(10)}</p>
                  <p className="pb-0 mb-0 main_color sec_color">{data.category_name_bangla}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="d-flex justify-content-center py-3 pt-5">
          <img
          className="img-fluid"
            src="https://www.adgully.com/banners/ezgif_com_gif_maker__1__183907.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

CategoryFeature.propTypes = {
  singleNews: PropTypes.array.isRequired,
};
export default CategoryFeature;
