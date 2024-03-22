import React from "react";
import PropTypes from "prop-types";
import { FaBolt } from "react-icons/fa6";
import "./PostHeader.css";

const PostHeader = ({ title }) => {
  return (
    <div className="post-header-box mt-5">
      <p className="post-header-title text-white" style={{
        backgroundImage: "linear-gradient(45deg, #165588 0%, #ed1e2b 51%, #165588 100%)"
      }}><FaBolt className="pe-2"/>{title}</p>
    </div>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostHeader;
