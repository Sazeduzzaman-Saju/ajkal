import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const SanitizedParagraph = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
<<<<<<< HEAD
  return <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

SanitizedParagraph.propTypes = {
  htmlContent: PropTypes.string.isRequired,
=======
  return (
    <>
      {sanitizedHtml && <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />}
    </>
  );
>>>>>>> e619897d37fb43f9fa43be9647797e35f6708a5c
};

export default SanitizedParagraph;
