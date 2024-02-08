<script>
  import { page } from "$app/stores"
</script>

<footer class:gray={$page.url.pathname === '/'}>&copy; AdamusDEV 2024</footer>

<style>
  footer {
    text-align: center;
    padding-block: 1rem;
    background-color: var(--_footer-bgc, var(--clr-bg));
    color: (--clr-paragraph);
    margin-top: auto;
  }

  footer.gray {
    --_footer-bgc: var(--clr-bg-secondary);
  }
</style>
