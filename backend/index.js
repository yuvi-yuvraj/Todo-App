const express = require("express");
const app = express();
const cors = require('cors');

const authRoutes = require('./src/routes/auth');
const todoRoutes = require('./src/routes/todos');

const connectDB = require('./src/database/db');

app.use(express.json());
connectDB();
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
