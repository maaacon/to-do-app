import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Content.css';
import EditToDoForm from './EditToDoForm';

const EditModal = (show, task, editToDo, handleClose) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className='edit-modal'>
        <EditToDoForm editToDo={editToDo} task={task} />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
