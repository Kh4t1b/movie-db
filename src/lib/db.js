import { MongoClient, ObjectId } from 'mongodb';

const uri = import.meta.env.VITE_DB_URI;

if (!uri || !uri.startsWith('mongodb')) {
  throw new Error('❌ VITE_DB_URI ist nicht gesetzt oder ungültig.');
}

const client = new MongoClient(uri);
await client.connect();

const db = client.db('movie-db');

export const movies = db.collection('movies');
export const artists = db.collection('artists');
export { ObjectId };
