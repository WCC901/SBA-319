import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import movies from "./routes/movies.mjs";

dotenv.config();
const PORT = process.env.PORT || 5050;
const ATLAS_URI = process.env.ATLAS_URI;
const db = mongoose.connection;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB through Mongoose
mongoose.connect(ATLAS_URI);


// Main server route
app.get("/", (req, res) => {
    res.send("Main server route");
  });



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });