const express = require("express");
const app = express();

const connectDB = require('./src/database/db');

app.use(express.json());
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
