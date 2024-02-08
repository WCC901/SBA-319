import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create the schema for movie documents
const movieSchema = new Schema({
        title: {type: String, required: true},
        releaseYear: {type: Number, required: true},
        plot: String,
        rated: String,

});

// Create the data model and export it
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;