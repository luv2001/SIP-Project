import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API");
});
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
// const CONNECTION_URL =
//   "mongodb+srv://dbsip:dbsip@cluster0.nl0yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Connected : http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
