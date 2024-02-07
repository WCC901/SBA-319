import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const ATLAS_URI = process.env.ATLAS_URI;

const db = mongoose.connection;
// Connect to MongoDB through Mongoose
mongoose.connect(ATLAS_URI);