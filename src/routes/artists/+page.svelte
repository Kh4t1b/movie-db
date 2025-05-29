<script>
  export let data;
</script>

<div class="container my-5">
  <h1 class="mb-4 text-white bg-dark p-3 rounded"> Künstler</h1>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each data.artists as artist}
      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 bg-dark text-white">
          <div class="card-body">
            <h5 class="card-title fw-bold">{artist.name}</h5>
            <p><strong>Nationalität:</strong> {artist.nationality}</p>
            <p><strong>Geburtsjahr:</strong> {artist.birthYear}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-5 text-center">
    <a href="/artists/new" class="btn btn-success btn-lg">➕ Neuen Künstler hinzufügen</a>
  </div>
</div>
