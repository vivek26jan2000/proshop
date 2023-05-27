import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`server is running in ${process.env.NODE_ENV} mode  on ${port}`)
);
