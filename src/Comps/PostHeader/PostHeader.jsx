import React from "react";
import PropTypes from "prop-types";
import "./PostHeader.css";

const PostHeader = ({ title }) => {
  return (
    <div className="post-header-box mt-5">
      <p
        className="post-header-title text-white"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #165588 0%, #ed1e2b 51%, #165588 100%)",
        }}
      >
        <img
          className="pe-2"
          width={40}
          src="https://ajkal.us/img/settings/Asset-2.png"
          alt="https://ajkal.us/img/settings/Asset-2.png"
          onError={(e) => {
            e.target.src = "https://ajkal.us/img/settings/placeholder.jpg";
          }}
        />
        {title}
      </p>
    </div>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostHeader;
