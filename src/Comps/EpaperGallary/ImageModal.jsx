import React from "react";
import { Modal, Button } from "react-bootstrap";

const ImageModal = ({ showModal, closeModal, selectedImage }) => {
  return (
    <Modal show={showModal} onHide={closeModal} className="rounded-0">
      <Modal.Header closeButton className="p-2 px-3 rounded-0" style={{background: '#165588', color: 'white'}}>
        <Modal.Title>Ajkal Usa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
