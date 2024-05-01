import React from "react";
import DOMPurify from "dompurify";

const SanitizedParagraph = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <p className="mb-0" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};

export default SanitizedParagraph;
