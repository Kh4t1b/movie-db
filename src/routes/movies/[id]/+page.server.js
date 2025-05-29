console.log("DETAILSEITE AUFGERUFEN");

import { movies, artists, ObjectId } from '../../../lib/db.js';

export async function load({ params }) {
  console.log("DETAILSEITE AUFGERUFEN");
  const movieId = params.id;
  console.log("MOVIE ID PARAMETER:", movieId);

  let movie;

  try {
    movie = await movies.findOne({ _id: new ObjectId(movieId) });
    console.log("GEFUNDENER FILM:", movie);
  } catch (err) {
    console.error("FEHLER BEIM LADEN DES FILMS:", err);
    return { movie: null };
  }

  if (!movie) {
    console.warn("KEIN FILM GEFUNDEN FÜR ID:", movieId);
    return { movie: null };
  }

  const movieArtists = await artists
    .find({ _id: { $in: movie.artistIds || [] } })
    .toArray();

  return {
    movie: {
      ...movie,
      _id: movie._id.toString(),
      artistIds: (movie.artistIds || []).map(id => id.toString()),
      artists: movieArtists.map(a => ({
        ...a,
        _id: a._id.toString()
      }))
    }
  };
}

