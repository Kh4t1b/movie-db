<script>
  export let data;
</script>

<div class="container my-5">
  <h1 class="mb-4">🎞 Neuen Film hinzufügen</h1>

  <form method="POST" class="border p-4 rounded shadow-sm bg-light">
    <div class="mb-3">
      <label for="title" class="form-label">Titel</label>
      <input type="text" id="title" name="title" required class="form-control" />
    </div>

    <div class="mb-3">
      <label for="releaseYear" class="form-label">Erscheinungsjahr</label>
      <input type="number" id="releaseYear" name="releaseYear" required class="form-control" />
    </div>

    <div class="mb-3">
      <label for="genre" class="form-label">Genre</label>
      <input type="text" id="genre" name="genre" required class="form-control" />
    </div>

    <div class="mb-3">
      <label for="artistIds" class="form-label">Künstler (Mehrfachauswahl):</label>
      <select id="artistIds" name="artistIds" multiple class="form-select">
        {#each data.artists as artist}
          <option value={artist._id}>{artist.name}</option>
        {/each}
      </select>
    </div>

    <button type="submit" class="btn btn-success">💾 Film speichern</button>
    <a href="/movies" class="btn btn-secondary ms-2">Zurück</a>
  </form>
</div>
