import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const SanitizedParagraph = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

SanitizedParagraph.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default SanitizedParagraph;
