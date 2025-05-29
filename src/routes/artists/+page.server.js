import { artists } from '$lib/db';

export async function load() {
  const allArtists = await artists.find().toArray();


  const artistsWithStringId = allArtists.map(artist => ({
    ...artist,
    _id: artist._id.toString()
  }));

  return { artists: artistsWithStringId };
}
