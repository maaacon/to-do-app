import React, { useState } from 'react';
import './Content.css';

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToDo(value);

    setValue('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='taskName'
        type='text'
        value={value}
        placeholder='Enter your to-do task here...'
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='todo-button' type='submit'>
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
