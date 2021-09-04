import express from "express";
import mongoose from "mongoose";
import Item from "./models/item.js";
import dotenv from "dotenv";
import itemRoutes from "./routes/items.js";
import userRoutes from "./routes/login.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/marketplace", itemRoutes);
app.use("/login", userRoutes);

mongoose
  .connect(process.env.URI, { useNewUrlParser: true })
  .then(() => app.listen(5000, () => console.log(`Connected to port 3000`)))
  .catch((error) => console.log(error));
