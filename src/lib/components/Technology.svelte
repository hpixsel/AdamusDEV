<script>
  export let icon, name, href
</script>

<a {href} class="technology" target="_blank">
  <img src={"/src/lib/assets/svg/" + icon + ".svg"} alt={name} />
  <h3>{name}</h3>
</a>

<style>
  .technology {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--clr-bg-secondary);
    width: fit-content;
    padding: 0.5rem 1rem;
    color: var(--clr-text);
    text-decoration: none;
    border-radius: 0.125rem;
    border: 1px solid rgb(75, 75, 75);
    flex-grow: 1;
    justify-content: center;
  }

  .technology img {
    height: 2em;
  }

  @media (min-width: 60rem) {
    .technology {
      min-width: 15rem;
      font-size: 1.125rem;
      padding-block: 0.75rem;
    }
  }
</style>
