import { artists, movies, ObjectId } from '../../../lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
  const allArtists = await artists.find().toArray();

  const preparedArtists = allArtists.map((a) => ({
    _id: a._id.toString(),
    name: a.name,
    birthYear: a.birthYear,
    nationality: a.nationality
  }));

  return { artists: preparedArtists };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get('title');
    const releaseYear = parseInt(formData.get('releaseYear'));
    const genre = formData.get('genre');
    const artistIds = formData.getAll('artistIds').map(id => new ObjectId(id));

    await movies.insertOne({
      title,
      releaseYear,
      genre,
      artistIds
    });

    // 👇 Nach dem Speichern weiterleiten
    throw redirect(303, '/movies');
  }
};
