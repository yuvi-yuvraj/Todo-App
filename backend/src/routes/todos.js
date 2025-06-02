const express = require('express');
const Todo = require('../models/todo');
const auth = require('../middleware/authMid');

const router = express.Router();

// GET all todos for a user
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create a new todo
router.post('/', auth, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Text is required' });
    }

    const todo = await Todo.create({
      user: req.user._id,
      text: text.trim(),
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a todo by ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id, user: req.user._id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Todo not found or not authorized' });
    }

    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update a todo by ID
router.put('/:id', auth, async (req, res) => {
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { $set: req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Todo not found or not authorized' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
