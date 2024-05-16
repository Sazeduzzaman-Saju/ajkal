import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCategory = ({ categories }) => {
  return (
    <div>
      <ul className="px-0 mb-0" style={{ marginLeft: "0", listStyle: "none" }}>
        <div className="row pt-3 px-0">
          <div>
            <h4 className="ps-0 text-white text-lg-start text-center">ক্যাটাগরিস</h4>
            <span className="border-devider"></span>
          </div>
          <div className="col-lg-3 col-6 text-center text-lg-start">
            {categories.slice(0, 4).map((data) => (
              <li key={data.id}>
                <Link
                  to={`/categories/${data.id}`}
                  type="button"
                  className="mb-1 rounded-0 text-white footer-ct-btn"
                >
                  {data.name_bangla}
                </Link>
              </li>
            ))}
          </div>
          <div className="col-lg-3 col-6 text-center text-lg-start">
            {categories.slice(4, 8).map((data) => (
              <li key={data.id}>
                <Link
                  to={`/categories/${data.id}`}
                  type="button"
                  className="mb-1 rounded-0 text-white footer-ct-btn"
                >
                  {data.name_bangla}
                </Link>
              </li>
            ))}
          </div>
          <div className="col-lg-3 col-6 text-center text-lg-start mt-3">
            {categories.slice(8, 12).map((data) => (
              <li key={data.id}>
                <Link
                  to={`/categories/${data.id}`}
                  type="button"
                  className="mb-1 rounded-0 text-white footer-ct-btn"
                >
                  {data.name_bangla}
                </Link>
              </li>
            ))}
          </div>
          <div className="col-lg-3 col-6 text-center text-lg-start mt-3">
            {categories.slice(12, 16).map((data) => (
              <li key={data.id}>
                <Link
                  to={`/categories/${data.id}`}
                  type="button"
                  className="mb-1 rounded-0 text-white footer-ct-btn"
                >
                  {data.name_bangla}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

NewsCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // Add more prop validations if needed
    })
  ).isRequired,
};

export default NewsCategory;
