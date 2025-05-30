import { artists } from '$lib/db';

export async function load() {
  const artistList = await artists.find().toArray();

  return {
    artists: artistList
  };
}
