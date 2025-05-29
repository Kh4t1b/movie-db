<script>
  export let data;
</script>

<div class="container my-5">
  {#if data.movie}
    <div class="card shadow-sm">
      <div class="card-body">
        <h1 class="card-title">
          {data.movie.title}
          <small class="text-muted">({data.movie.releaseYear})</small>
        </h1>

        <p class="card-text"><strong>Genre:</strong> {data.movie.genre}</p>

        <hr />

        <h5 class="mt-4"> Künstler</h5>
        <ul class="list-group">
          {#each data.movie.artists as artist}
            <li class="list-group-item">
              <strong>{artist.name}</strong><br />
              <small>{artist.nationality}, geboren {artist.birthYear}</small>
            </li>
          {/each}
        </ul>

        <a href="/movies" class="btn btn-secondary mt-4">⬅️ Zurück zur Übersicht</a>
      </div>
    </div>
  {:else}
    <div class="alert alert-danger">Film nicht gefunden.</div>
  {/if}
</div>
