import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BanglaTimeAgo from "../../../Comps/BanglaTime/BanglaTimeDiffrence";
import Skeleton from "react-loading-skeleton";
import CategoryNewsSlider from "./CategoryNewsSlider";

const CategoryFeature = ({ singleNews }) => {

  return (
    <div className="col-lg-8">
      <div className="row gx-3">
        <div className="col-sm-8 mb-3">
          <CategoryNewsSlider singleNews={singleNews} />
        </div>
        {!singleNews.length ? ( // Render skeleton loading placeholders if singleNews is empty
          <div className="col-sm-4">
            <Skeleton height={200} count={3} />
          </div>
        ) : (
          // Render actual data if singleNews is not empty and loading is false
          singleNews.slice(0,4).map((data) => (
            <div className="col-sm-4" key={data.id}>
              <Link to={`/news/${data.id}`}>
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
                      <h5 className="pt-2 main_color">
                        {data.news_title.slice(0, 24)}
                      </h5>
                      <p className="">
                        {data.news_short_brief.slice(0, 59)}...
                      </p>
                      <p
                        className="text-muted mb-1"
                        style={{ fontSize: "12px" }}
                      >
                        <BanglaTimeAgo
                          postTime={data.news_time}
                        ></BanglaTimeAgo>
                      </p>
                      <p className="pb-0 mb-0 main_color sec_color">
                        {data.category_name_bangla}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
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
