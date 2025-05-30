import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.VITE_DB_URI;

if (!uri || !uri.startsWith('mongodb')) {
  throw new Error('❌ VITE_DB_URI ist nicht gesetzt oder ungültig.');
}

const client = new MongoClient(uri);
let db;

export async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db('movie-db');
  }
  return {
    movies: db.collection('movies'),
    artists: db.collection('artists'),
  };
}

export { ObjectId };
    