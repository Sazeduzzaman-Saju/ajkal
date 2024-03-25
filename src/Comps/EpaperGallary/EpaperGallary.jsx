import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Assuming ImageModal is in the same directory
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { Modal, Button } from "react-bootstrap";

const EpaperGallary = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginTop: "30px",  marginBottom: "30px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
              onClick={() => openModal(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <ImageModal
        showModal={showModal}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default EpaperGallary;
