import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
import Movie from '../models/movie.mjs';
const router = express.Router();

// Get a single movie
router.get("/:id", async (req, res) => {
    let foundMovie = await Movie.findById(req.params.id);
    res.status(200).json({ data: foundMovie });
});

// Update an Audience Score
router.patch("/:id", async (req, res) => {
    const updatedScore = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScore) {
        return res.status(404).json({ error: 'Audience Score was not found.' });
    }
    res.status(200).json(updatedScore);
});

// Delete a movie entry
router.delete("/:id", async (req, res) => {
    const result = await Movie.findByIdAndDelete(req.params.id)
    res.status(204).json({data: `${result.title} was deleted.`});
    if (!result) {
        res.send("Movie not found").status(404);
    };
});