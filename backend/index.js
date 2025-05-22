const express = require("express");
const app = express();
require('dotenv').config();

const connectDB = require('./src/database/db');

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Todo backend running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
