import React, { useEffect, useState } from "react";

function FacebookComments({ url }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status when the component mounts
    window.FB && window.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    // This will force the comments plugin to resize to the width of its container
    window.FB && window.FB.XFBML.parse();
  }, [url]); // Re-parse when URL changes

  return (
    <div className="container-fluid">
      <div id="fb-root"></div>
      <div className="row">
        <div className="col-lg-12 ps-0">
          {/* Facebook Comments Plugin */}
          <div
            className="fb-comments"
            data-href={url} // Set the data-href dynamically
            data-numposts={5}
            data-width="100%" // Set the width to 100% to make it full width
            style={{
              // Add inline styles here
              border: "1px solid #ccc",
              padding: "10px",
              // Add more styles as needed
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FacebookComments;
