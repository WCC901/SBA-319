import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Connect to the Mongo client
const client = new MongoClient(process.env.ATLAS_URI);

// Error handling in case
// the connection fails
let conn;
try{
    conn = await client.connect();
} catch (e) {
    console.error(e);
};

// Make sure the connection is
// pointing to the desired database,
// and export it
let db = conn.db('sample_mflix');

export default db;