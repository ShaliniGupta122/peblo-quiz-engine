import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import ingestRoutes from "./routes/ingestRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api", ingestRoutes);
app.use("/api", quizRoutes);

app.listen(5000, () => {
  console.log("Server running");
});