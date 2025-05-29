<script>
  import { page } from '$app/stores';
  $: current = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
  <a class="navbar-brand" href="/">🎬 Movie-DB</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link {current.startsWith('/movies') ? 'active' : ''}" href="/movies">Filme</a>
      </li>
      <li class="nav-item">
        <a class="nav-link {current.startsWith('/artists') ? 'active' : ''}" href="/artists">Künstler</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .nav-link.active {
    font-weight: bold;
    color: #0d6efd !important;
  }
</style>
