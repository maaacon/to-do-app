import React, { useState } from 'react';
import './Content.css';

const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editToDo(value, task.id);

    setValue('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='taskName'
        type='text'
        value={value}
        placeholder='Update your to-do task here...'
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='todo-button' type='submit'>
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
