import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideoNews = ({ probashNews }) => {
  return (
    <div>
      <div className="row">
        {probashNews.map(({ title_img, news_title, postDescription, id }) => (
          <div className="col-lg-4" key={id}>
            <Link to={`/news/${id}`} className="text-muted" key={id}>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img width={150} src={`https://ajkal.goexpressus.com/images/${title_img}`}
                  className="rounded-1" alt="" />
                </div>
                <div className="ps-3">
                  <h5 className="mb-1 main-color">{news_title}</h5>
                  <p className="m-0">{postDescription}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

VideoNews.propTypes = {
  probashNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgsrc: PropTypes.string.isRequired,
      postTitle: PropTypes.string.isRequired,
      postDescription: PropTypes.string.isRequired,
      // Add more prop types as needed
    })
  ).isRequired,
};

export default VideoNews;
