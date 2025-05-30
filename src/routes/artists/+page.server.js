import { getDb } from '$lib/db';

export async function load() {
  const { artists } = await getDb();
  const artistList = await artists.find().toArray();

  return {
    artists: artistList
  };
}
