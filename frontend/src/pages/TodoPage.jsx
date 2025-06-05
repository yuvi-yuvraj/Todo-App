import { useState, useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore";
import { useAuthStore } from "../store/useAuthStore";
import TodoItem from "../components/TodoItem";


const TodoPage = () => {
  const [text, setText] = useState("");
  const { authUser, logout } = useAuthStore();
  const { todos, fetchTodos, addTodo, deleteTodo, toggleTodo } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!authUser) return <div className="text-white">Please log in</div>;
  return (
    <div className="h-screen mx-auto mt-10 p-10 bg-black">
      <h1 className="text-2xl font-bold text-white">Your To-Dos</h1>
      <div className="flex gap-2">
        <input
          className="flex-1 border px-2 py-1 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => { addTodo(text); setText(""); }}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
      <button onClick={logout} className="mt-4 text-sm text-red-500">Logout</button>
    </div>
  );
};

export default TodoPage;
