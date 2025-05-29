import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_DB_URI);
await client.connect();

const db = client.db('movie-db');

export const movies = db.collection('movies');
export const artists = db.collection('artists');
export { ObjectId };
