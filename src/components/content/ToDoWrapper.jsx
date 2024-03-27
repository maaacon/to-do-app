import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDoList';
import EditToDoForm from './EditToDoForm';
import TodoListActions from './ToDoListActions';
import DeleteAllModal from './DeleteAllModal';
import './Content.css';

uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  //Update todo status (Done/Undone)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Delete todo
  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Edit todo
  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //Delete All
  const deleteAllTask = (id) => {
    setTodos([]);
  };

  //Mark All Done
  const markAllDone = (id) => {
    if (!todos) return;
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
  };

  // const markAllDone = (id) => {
  //   setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  // };

  //Delete All Modal Use State
  const [showDeleteAllModal, setShowDeleteAllModal] = useState(false);

  //Handle Delete All Modal
  const handleDeleteAllModalClose = () => setShowDeleteAllModal(false);
  const handleDeleteAllModalShow = () => setShowDeleteAllModal(true);
  const handleDeleteAll = () => {
    deleteAllTask();
    handleDeleteAllModalClose();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-lg-6 form-bg'>
          <div className='ToDoWrapper'>
            <h1>TO-DO LIST</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.length > 0 && (
              <TodoListActions
                deleteAllTask={handleDeleteAllModalShow}
                markAllDone={markAllDone}
              />
            )}
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <EditToDoForm editToDo={editTask} task={todo} />
              ) : (
                <ToDoList
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteToDo={deleteToDo}
                  editToDo={editToDo}
                />
              )
            )}
          </div>
        </div>
        <div className='col-sm-3'></div>
      </div>
      <DeleteAllModal
        show={showDeleteAllModal}
        handleClose={handleDeleteAllModalClose}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default ToDoWrapper;
