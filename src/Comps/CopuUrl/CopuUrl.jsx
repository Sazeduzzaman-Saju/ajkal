import React, { useState } from "react";

function CopuUrl({ url }) {
  // Function to copy the URL to clipboard
  const copyUrlToClipboard = () => {
    // Create a temporary input element
    const input = document.createElement("input");
    input.setAttribute("value", url);
    document.body.appendChild(input);

    // Select the input value
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(input);

    // Optionally, provide feedback to the user
    alert("URL copied to clipboard: " + url);
  };

  return (
    <button type="button" onClick={copyUrlToClipboard}>
      Copy Url
    </button>
  );
}

export default CopuUrl;
