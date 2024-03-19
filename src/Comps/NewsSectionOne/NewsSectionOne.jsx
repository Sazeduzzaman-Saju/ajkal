import React from "react";
import PropTypes from "prop-types";
import "./NewsSectionOne.css";
import { Link } from "react-router-dom";

const NewsSectionOne = ({ bangladeshNews }) => {
  return (
    <div>
      <div className="row mb-5 align-items-center ">
        <div className="col-lg-6">
          <div className="row">
            {bangladeshNews.map((data) => (
              <div className="col-lg-6" key={data.id}>
                <Link to={`/news/${data.id}`} className="text-muted">
                  <div className="card border-0 shadow-sm mb-2">
                    <div className="card-body p-0">
                      <div className="d-flex align-items-center image-container">
                        <div>
                          <img
                            className="rouned-2 news-ft-section-imge zoom-image"
                            src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                            width={80}
                            alt=""
                          />
                        </div>
                        <div className="ps-2 p-2">
                          <h6 className="mb-0 main-color">
                            {data.news_title.slice(0, 32)}...
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          {bangladeshNews.map((data) =>
            // Check if data "is_featured" is equal to "1"
            data.is_featured === "1" ? (
              <Link
                to={`/news/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="card border-0 shadow-sm mb-2">
                  <div className="card-body p-0 image-container">
                    <img
                      className="img-fluid rouned-2 "
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt={data.news_title}
                      style={{borderRadius: '5px'}}
                    />
                    <div className="ps-2 p-2">
                      <h5 className="mb-0 main-color py-3">{data.news_title}</h5>
                      <p>{data.news_short_brief} <span className="text-danger">আরও পড়ুন...</span></p>
                    </div>
                  </div>
                </div>
              </Link>
            ) : // If not featured, render other content or nothing
            null
          )}
        </div>
      </div>
    </div>
  );
};

NewsSectionOne.propTypes = {
  bangladeshNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageLink: PropTypes.string.isRequired,
      titles: PropTypes.string.isRequired,
      // Add any other properties and their types as needed
    })
  ).isRequired,
};

export default NewsSectionOne;
