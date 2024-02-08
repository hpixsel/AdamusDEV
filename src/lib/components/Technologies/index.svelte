<script>
  import Technology from "../Technology.svelte"
  import technologies from "./technologies.json"
  console.log(technologies)
</script>

<div class="technologies--container">
  <div class="technologies wrapper">
    <h1>Technologie, z którymi pracowałem</h1>
    <div class="technologies__grid">
      {#each technologies.better as technology}
        <Technology
          icon={technology.icon}
          name={technology.name}
          href={technology.href}
        />
      {/each}
    </div>
    <div class="technologies__grid">
      {#each technologies.less as technology}
        <Technology
          icon={technology.icon}
          name={technology.name}
          href={technology.href}
        />
      {/each}
    </div>
  </div>
  <div class="technologies__bg">
    <img src="/src/lib/assets/technology-bg.png" alt="Technologies" />
  </div>
</div>

<style>
  .technologies--container {
    padding-block: 3rem;
    position: relative;
    margin-block: 1rem;
  }

  .technologies h1 {
    font-size: 1.1rem;
  }

  .technologies__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .technologies__grid {
    margin-top: 2rem;
  }

  .technologies__bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    border: 5px solid rgb(75, 75, 75);
    border-left: 0;
    border-right: 0;
    opacity: 2.5%;
  }

  .technologies__bg img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 60rem) {
    .technologies h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
</style>
