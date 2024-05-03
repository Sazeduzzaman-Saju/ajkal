import React, { useState, useEffect } from "react";

const LazyImageNews = ({ src, alt, className, errorSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setIsLoading(false);
  };

  const handleImageError = () => {
    setError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true); // Start loading whenever src changes
    setIsLoaded(false); // Reset isLoaded state
    setError(false); // Reset error state

    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = src;

    // Clean up on unmount or if src changes before image is loaded
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className="lazy-image-container">
      {error && (
        <img
          src={errorSrc}
          alt={alt}
          className={`error-image ${className} card-img-top`}
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: 1
          }}
        />
      )}

      {!error && isLoading && (
        <img
          src={errorSrc} // Show error image while loading
          alt={alt}
          className={`error-image ${className} card-img-top`}
          style={{
            filter: "blur(10px)",
            transition: "filter 0.3s ease-in-out",
            opacity: 1
          }}
        />
      )}

      {!error && !isLoading && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${className} card-img-top`}
          style={{
            filter: isLoaded ? "none" : "blur(10px)",
            transition: "filter 0.3s ease-in-out",
            opacity: isLoaded ? 1 : 0
          }}
        />
      )}
    </div>
  );
};

export default LazyImageNews;
