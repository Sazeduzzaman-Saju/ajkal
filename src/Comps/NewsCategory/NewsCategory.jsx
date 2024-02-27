import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCategory = ({ categories }) => {
  return (
    <div>
      {categories.length > 0 && (
        <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-1">
          {categories.map((category) => (
            <li key={category.userId}>
              <Link
                to={`/categories/${category.id}`}
                type="button"
                className="btn btn-outline-primary border-white me-2 mb-2 rounded-0 text-white footer-ct-btn"
              >
                {category.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

NewsCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // Add more prop validations if needed
    })
  ).isRequired,
};

export default NewsCategory;
