<script>
  import Hero from "$lib/components/Hero/index.svelte"
  import Introduction from "$lib/components/Introduction/index.svelte"
  import Contact from "../lib/components/Contact.svelte"
  import Featured from "../lib/components/Featured.svelte"

  export let data
</script>

<Hero />
<Introduction />
<div class="featured--container wrapper">
  <h2><span>Moje Prace</span></h2>
  <div class="featured__items">
    {#each data.featuredPosts as featured}
      <Featured
        img={featured.imgs[0]}
        title={featured.title}
        slug={featured.slug}
        content={featured.content}
      />
    {/each}
  </div>
  <a href="/portfolio" class="btn" data-btn-fit>Zobacz Inne Prace</a>
</div>
<Contact />

<style>
  .featured--container {
    display: grid;
    gap: 2rem;
    padding-block: 2rem;
  }

  .featured__items {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 60rem) {
    .featured--container > :is(h2, .btn) {
      text-align: center;
      margin: auto;
    }

    .featured__items {
      grid-template-areas: "second first third";
      grid-template-columns: repeat(3, 1fr);
      margin-block: 2rem;
      gap: 3rem;
    }

    .featured__items > :global(:nth-of-type(1)) {
      grid-area: first;
      scale: 1.1;
    }

    .featured__items > :global(:nth-of-type(2)) {
      grid-area: second;
    }

    .featured__items > :global(:nth-of-type(3)) {
      grid-area: third;
    }
  }
</style>
