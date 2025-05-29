import { movies, artists, ObjectId } from '../../lib/db.js';

export async function load() {
  // Lösche alte Daten
  await artists.deleteMany({});
  await movies.deleteMany({});

  // Neue IDs erzeugen
  const artist1 = new ObjectId();
  const artist2 = new ObjectId();

  // Artists einfügen
  await artists.insertMany([
    { _id: artist1, name: 'Leonardo DiCaprio', birthYear: 1974, nationality: 'USA' },
    { _id: artist2, name: 'Elliot Page', birthYear: 1987, nationality: 'Canada' }
  ]);

  // Movie mit referenzierten Artist-IDs einfügen
  await movies.insertOne({
    title: 'Inception',
    releaseYear: 2010,
    genre: 'Sci-Fi',
    artistIds: [artist1, artist2]
  });

  return { success: true };
}
