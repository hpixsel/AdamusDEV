<script>
  export let data
</script>

<div class="projects">
  {#each data.posts as project}
    <div class="projects__item">
      <div class="wrapper">
        <div class="projects__item__img">
          <img src={project.imgs[0]} alt={project.title} />
        </div>
        <div class="projects__item__text">
          <h1>{project.title}</h1>
          <svelte:component this={project.content} />
          <a href={"/portfolio/" + project.slug} class="btn" data-btn-fit>
            Więcej szczegółów
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .projects__item:nth-of-type(2n) {
    background-color: var(--clr-bg-secondary);
  }

  .projects__item {
    padding-block: 2rem;
  }

  .projects__item__img {
    border-radius: 0.25rem;
    overflow: hidden;
    border: 1px solid var(--clr-primary);
    aspect-ratio: 16/9;
  }

  .projects__item__img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .projects__item__text {
    margin-top: 1rem;
  }

  .projects__item__text > :global(p) {
    margin-top: 0.5rem;
  }

  .projects__item__text > .btn {
    margin-top: 1rem;
  }

  @media (min-width: 60rem) {
    .projects__item > div {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .projects__item__img {
      width: 50%;
    }

    .projects__item__text {
      width: 50%;
      margin-top: 0;
    }

    .projects__item__text > :global(p) {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>
