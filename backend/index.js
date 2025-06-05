import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";

import authRoutes from './src/routes/auth.route.js'
import todoRoutes from './src/routes/todos.route.js'

dotenv.config();

const app = express();

app.use(express.json());
connectDB();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
