import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.text}
          <button onClick={() => onDelete(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
