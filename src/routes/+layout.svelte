<script>
  import Navbar from "$lib/components/Navbar/index.svelte"
  import Footer from "$lib/components/Footer/index.svelte"
  import "../styles/style.css"
</script>

<div class="container">
  <Navbar />
  <div class="main">
    <slot />
  </div>
  <Footer />
</div>
