import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCategory = ({ categories }) => {
  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-1">
        {categories.map((data) => (
          <li key={data.id}>
            <Link
              to={`/categories/${data.id}`}
              type="button"
              className="btn btn-outline-primary border-white me-2 mb-2 rounded-0 text-white footer-ct-btn"
            >
              {data.name_bangla}
            </Link>
          </li>
        ))}
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
