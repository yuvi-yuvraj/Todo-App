import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useTodoStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    try {
      const res = await axiosInstance.get("/todos");
      set({ todos: res.data });
    } catch {
      toast.error("Failed to fetch todos");
    }
  },
  addTodo: async (text) => {
    try {
      const res = await axiosInstance.post("/todos", { text });
      set((state) => ({ todos: [...state.todos, res.data] }));
    } catch {
      toast.error("Failed to add todo");
    }
  },
  deleteTodo: async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      set((state) => ({ todos: state.todos.filter((t) => t._id !== id) }));
    } catch {
      toast.error("Failed to delete");
    }
  },
  toggleTodo: async (id) => {
    try {
      const res = await axiosInstance.patch(`/todos/${id}`);
      set((state) => ({
        todos: state.todos.map((t) =>
          t._id === id ? res.data : t
        ),
      }));
    } catch {
      toast.error("Failed to toggle");
    }
  },
}));
