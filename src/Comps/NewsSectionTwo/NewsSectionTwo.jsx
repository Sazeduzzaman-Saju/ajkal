import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const NewsSectionTwo = ({ probashNews }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (probashNews && probashNews.length > 0) {
      setLoading(false);
    }
  }, [probashNews]);

  return (
    <div>
      <div className="row">
        {loading ? (
          // Render skeleton loading placeholders
          Array.from({ length: 3 }).map((_, index) => (
            <div className="col-lg-3" key={index}>
              <div className="card border-0 shadow-sm mb-4">
                <Skeleton height={200} />
                <div className="card-body">
                  <Skeleton height={20} width={150} />
                  <Skeleton height={60} />
                </div>
              </div>
            </div>
          ))
        ) : (
          // Render actual content when data is loaded
          probashNews.map(({ title_img, news_title, postDescription, id, category_name_bangla }) => (
            <div className="col-lg-3" key={id}>
              <Link to={`/${category_name_bangla}/${id}`} className="text-muted">
                <div className="card border-0 shadow-sm mb-4" style={{height: '17.2rem'}}>
                  <img
                    width={100}
                    src={`https://ajkal.us/images/${title_img}`}
                    className="card-img-top rounded-1"
                    alt=""
                  />
                  <div className="card-body">
                    <h6 className="mb-1 main-color">{news_title}।</h6>
                    <p className="m-0">{postDescription}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

NewsSectionTwo.propTypes = {
  probashNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title_img: PropTypes.string.isRequired,
      news_title: PropTypes.string.isRequired,
      postDescription: PropTypes.string.isRequired,
      // Add any other properties and their types as needed
    })
  ).isRequired,
};

export default NewsSectionTwo;
