import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";
import Todo from "../models/todo.model.js";

// get alltodo
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching todos' });
  }
};

/**
 * Create a new todo
 */
export const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: 'Todo text is required' });
    }

    const newTodo = new Todo({
      user: req.user._id,
      text,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: 'Error creating todo' });
  }
};

/**
 * Delete a todo by ID
 */
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found or unauthorized' });
    }

    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
};

/**
 * Update a todo
 */
export const updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Todo not found or unauthorized' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating todo' });
  }
};