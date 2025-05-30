<script>
  export let data;
</script>

<h1>Alle Filme</h1>

<ul>
  {#each data.movies as movie}
    <li>{movie.title}</li>
  {/each}
</ul>

<div class="container my-5">
  <h1 class="mb-4 text-white bg-dark p-3 rounded"> Filme</h1>


  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each data.movies as movie}
      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 bg-light">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-2">
              <a href={`/movies/${movie._id}`} class="text-decoration-none text-dark fw-bold">
                {movie.title} <span class="text-muted">({movie.releaseYear})</span>
              </a>
            </h5>
            <p class="mb-1"><strong> Genre:</strong> {movie.genre}</p>
            <p class="mb-2"><strong> Künstler:</strong> {movie.artists.map(a => a.name).join(', ')}</p>

            <div class="mt-auto d-flex justify-content-end">
              <a href={`/movies/${movie._id}`} class="btn btn-outline-primary btn-sm">🔍 Details</a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-5 text-center">
    <a href="/movies/new" class="btn btn-success btn-lg">➕ Neuen Film hinzufügen</a>
  </div>
</div>
