import { movies, artists } from '../../lib/db.js';

export async function load() {
  const movieList = await movies.find().toArray();

  const enrichedMovies = await Promise.all(
    movieList.map(async (movie) => {
      const artistIds = Array.isArray(movie.artistIds) ? movie.artistIds : [];

      const movieArtists = await artists
        .find({ _id: { $in: artistIds } })
        .toArray();

      return {
        ...movie,
        _id: movie._id.toString(),
        artistIds: artistIds.map(id => id.toString()), // ← HIER NEU
        artists: movieArtists.map((a) => ({
          ...a,
          _id: a._id.toString()
        }))
      };
    })
  );

  return { movies: enrichedMovies };
}
