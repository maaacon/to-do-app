import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Content.css';

const DeleteAllModal = ({ show, handleClose, handleDeleteAll }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete All Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete all task?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDeleteAll}>
          Delete All
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAllModal;
