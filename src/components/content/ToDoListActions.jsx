import React from 'react';

const ToDoListActions = ({ todos, deleteAllTask, markAllDone }) => {
  const allCompleted = todos?.every((todo) => todo.completed);
  const buttonText = allCompleted ? 'Mark All Undone' : 'Mark All Done';
  return (
    <div className='todo-list-actions'>
      <button className='delete-all-button' onClick={deleteAllTask}>
        Delete All
      </button>
      <button className='mark-all-button' onClick={markAllDone}>
        {buttonText}
      </button>
    </div>
  );
};

export default ToDoListActions;

// const ToDoListActions = ({ deleteAllTask, markAllDone }) => {
//   return (
//     <div className='todo-list-actions'>
//       <button className='delete-all-button' onClick={deleteAllTask}>
//         Delete All
//       </button>
//       <button className='mark-all-button' onClick={markAllDone}>
//         Mark All Done
//       </button>
//     </div>
//   );
// };
