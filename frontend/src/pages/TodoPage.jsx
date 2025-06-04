import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const TodoPage = ({ onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    api.get('/todos')
      .then(res => setTodos(res.data))
      .catch(err => {
        alert('Session expired');
        localStorage.removeItem('token');
        onLogout();
      });
  }, []);

  const handleAdd = async () => {
    const res = await api.post('/todos', { text });
    setTodos([...todos, res.data]);
    setText('');
  };

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h2>Your To-Do List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => {
        localStorage.removeItem('token');
        onLogout();
      }}>Logout</button>
    </div>
  );
};

export default TodoPage;
