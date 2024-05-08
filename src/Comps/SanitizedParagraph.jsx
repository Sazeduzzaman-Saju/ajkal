import React from "react";
import DOMPurify from "dompurify";

const SanitizedParagraph = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <>
      {sanitizedHtml && <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />}
    </>
  );
};

export default SanitizedParagraph;
