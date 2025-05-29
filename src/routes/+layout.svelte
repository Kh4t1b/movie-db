<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Navbar />

<main class="container py-4">
  <slot />
  <Footer />
</main>
