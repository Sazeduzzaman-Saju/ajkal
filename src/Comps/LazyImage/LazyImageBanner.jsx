import React, { useState, useEffect, useRef } from "react";

const LazyImageBanner = ({ src, alt, className, errorSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "100px 0px" } // Adjust the threshold as needed
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      ref={imgRef}
      src={isVisible && !error ? src : errorSrc}
      alt={alt}
      className={`lazy-image ${className} ${isVisible && "visible"} ${
        isLoaded && "loaded"
      }`}
      style={{
        filter: `blur(${!isLoaded && !error ? "10px" : "0"})`, // Apply blur effect if image is not loaded and not an error
        transition: "filter 0.1s ease-in-out", // Add transition inline
        opacity: isLoaded || error || !isVisible ? 1 : 0, // Hide image if not loaded, error occurred, or not visible
      }}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
};

export default LazyImageBanner;
