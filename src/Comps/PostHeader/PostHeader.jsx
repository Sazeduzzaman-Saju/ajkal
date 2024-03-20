import React from "react";
import PropTypes from "prop-types";
import "./PostHeader.css";

const PostHeader = ({ title }) => {
  return (
    <div className="post-header-box mt-5">
      <p className="post-header-title main-color" style={{
        background: 'var(--main)',
        color: 'white',
        borderRadius: '55px'
      }}>{title}</p>
    </div>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostHeader;
