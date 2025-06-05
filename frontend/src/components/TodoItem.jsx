const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
    <span
      onClick={() => onToggle(todo._id)}
      className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo._id)} className="text-red-500">✖</button>
  </div>
);

export default TodoItem;
