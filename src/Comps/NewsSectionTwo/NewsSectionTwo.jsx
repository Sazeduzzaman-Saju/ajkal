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
          <>
            <Skeleton height={200} width={150} count={3} />
            <Skeleton height={20} width={200} count={3} />
          </>
        ) : (
          // Render actual content when data is loaded
          probashNews.map(({ title_img, news_title, postDescription, id }) => (
            <div className="col-lg-4" key={id}>
              <Link to={`/news/${id}`} className="text-muted" key={id}>
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <img
                      width={150}
                      src={`https://ajkal.goexpressus.com/images/${title_img}`}
                      className="rounded-1"
                      alt=""
                    />
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1 main-color">{news_title}</h5>
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
