import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "HELLO FROM PHASE 2" });
});

app.listen(port, () => {
  console.log(`SERVER Started on ${port}`);
});
