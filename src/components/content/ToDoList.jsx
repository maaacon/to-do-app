import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './DeleteModal';

const ToDoList = ({ task, toggleComplete, deleteToDo, editToDo }) => {
  //Edit Modal Use State
  // const [showEditModal, setShowEditModal] = useState(false);

  // const handleEditModalClose = () => setShowEditModal(false);
  // const handleEditModalShow = () => setShowEditModal(true);
  // const handleEdit = () => {
  //   editToDo(task.id);
  //   handleEditModalClose();
  // };

  //Delete Modal Use State
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //Handle Delete Modal
  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleDeleteModalShow = () => setShowDeleteModal(true);
  const handleDelete = () => {
    deleteToDo(task.id);
    handleDeleteModalClose();
  };

  return (
    <div className='card-body' id='todoList'>
      <p
        className={`${task.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editToDo(task.id)}
          // {handleEditModalShow}
        />
        <FontAwesomeIcon icon={faTrash} onClick={handleDeleteModalShow} />
      </div>
      {/* <EditModal
        show={showEditModal}
        handleClose={handleEditModalClose}
        handleDelete={handleEdit}
      /> */}
      <DeleteModal
        show={showDeleteModal}
        handleClose={handleDeleteModalClose}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ToDoList;
