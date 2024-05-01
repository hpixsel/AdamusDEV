<script>
  export let img, title, slug, content
</script>

<a href={"/portfolio/" + slug} class="featured">
  <div class="featured__img">
    <img src={img} alt={title} />
  </div>
  <div class="featured__text">
    <h2>{title}</h2>
    <svelte:component this={content} />
  </div>
</a>

<style>
  .featured {
    background-color: var(--clr-bg-secondary);
    display: block;
    color: var(--clr-text);
    text-decoration: none;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .featured__text {
    padding: 1rem;
  }

  .featured__text :global(p) {
    margin-top: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
