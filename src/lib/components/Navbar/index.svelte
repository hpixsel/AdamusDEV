<script>
  import routes from "./routes.json"
  import sticky from "$lib/sticky"
  import { page } from "$app/stores"

  let stickToTop = true
  let isStuck = false

  const handleStuck = e => {
    isStuck = e.detail.isStuck
  }

  let navToggle = false
  $: $page.url && (navToggle = false)

  const toggleNav = () => {
    navToggle = !navToggle
  }
</script>

<header
  class="nav-container"
  use:sticky={{ stickToTop }}
  on:stuck={handleStuck}
  class:nav-container-sticky={isStuck}
>
  <nav class="nav wrapper">
    <a href="/" class="nav__logo">
      <div class="nav__logo_svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 48" fill="none">
          <g clip-path="url(#clip0_109_3068)">
            <path
              d="M45.7076 0C50.7266 0 55.1125 1.00276 58.8653 3.00847C62.6182 5.01419 65.5121 7.84037 67.5468 11.4872C69.6268 15.0883 70.6667 19.2592 70.6667 24C70.6667 28.6952 69.6268 32.8661 67.5468 36.5128C65.5121 40.1594 62.5956 42.9858 58.7975 44.9915C55.0448 46.9971 50.6812 48 45.7076 48H27.87V0H45.7076ZM44.9615 37.8803C49.3476 37.8803 52.7612 36.6723 55.2029 34.2564C57.6446 31.8406 58.8653 28.4218 58.8653 24C58.8653 19.5784 57.6446 16.1368 55.2029 13.6752C52.7612 11.2136 49.3476 9.98299 44.9615 9.98299H39.4678V37.8803H44.9615Z"
              fill="white"
            />
            <path
              d="M23.9034 12.9476V0H17.2223L0 48H12.2127L17.4805 32.2057L23.9556 32.2106V24.3158L20.1168 24.3012L23.9034 12.9476Z"
              fill="#C5DF70"
            />
          </g>
          <defs>
            <clipPath id="clip0_109_3068">
              <rect width="70.6667" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h3 class="nav__logo_name">AdamusDEV</h3>
    </a>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="nav__menu" on:click={toggleNav}>
      <svg viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M59.9314 47.1579C61.233 47.1585 62.4846 47.6584 63.4267 48.5538C64.3687 49.4492 64.9291 50.6716 64.9916 51.9677C65.0542 53.2638 64.6142 54.5342 63.7627 55.5156C62.9112 56.4971 61.7136 57.1144 60.4179 57.2396L59.9314 57.2632H5.86571C4.56403 57.2625 3.31248 56.7627 2.37041 55.8673C1.42835 54.9718 0.867979 53.7494 0.805424 52.4533C0.742869 51.1573 1.18292 49.8869 2.0344 48.9054C2.88588 47.924 4.08351 47.3067 5.37912 47.1815L5.86571 47.1579H59.9314ZM59.9314 23.5789C61.2757 23.5789 62.5649 24.1113 63.5154 25.0588C64.466 26.0064 65 27.2915 65 28.6316C65 29.9716 64.466 31.2568 63.5154 32.2043C62.5649 33.1519 61.2757 33.6842 59.9314 33.6842H5.86571C4.52142 33.6842 3.23219 33.1519 2.28163 32.2043C1.33108 31.2568 0.797058 29.9716 0.797058 28.6316C0.797058 27.2915 1.33108 26.0064 2.28163 25.0588C3.23219 24.1113 4.52142 23.5789 5.86571 23.5789H59.9314ZM59.9314 0C61.2757 0 62.5649 0.532329 63.5154 1.47988C64.466 2.42743 65 3.71259 65 5.05263C65 6.39267 64.466 7.67783 63.5154 8.62538C62.5649 9.57293 61.2757 10.1053 59.9314 10.1053H5.86571C4.52142 10.1053 3.23219 9.57293 2.28163 8.62538C1.33108 7.67783 0.797058 6.39267 0.797058 5.05263C0.797058 3.71259 1.33108 2.42743 2.28163 1.47988C3.23219 0.532329 4.52142 0 5.86571 0H59.9314Z"
          fill="white"
        />
      </svg>
    </div>
    <ul class="nav__links" class:nav__links-active={navToggle}>
      {#each routes as route}
        <li>
          <a
            class:link-active={$page.url.pathname === route.href}
            href={route.href}>{route.name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .nav-container {
    position: sticky;
    top: 0;
    background-color: var(--clr-bg);
    isolation: isolate;
    z-index: 99;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    z-index: 99;
  }

  .nav__logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: var(--clr-text);
  }

  .nav__logo_svg {
    width: 2rem;
    display: flex;
  }

  .nav__menu {
    width: 1.5rem;
    display: flex;
    cursor: pointer;
  }

  /* Links Style */
  .nav__links {
    position: fixed;
    inset: 0;
    top: 3.45rem;
    background-color: var(--clr-nav-links);
    z-index: -1;
    list-style: none;
    backdrop-filter: blur(0.125rem);

    transform: translateX(100%);
    opacity: 0;
    transition:
      transform 125ms ease-out,
      opacity 125ms ease-out;
  }

  .nav__links-active {
    transform: translateX(0);
    opacity: 1;
  }

  .nav__links > li a {
    display: block;
    padding: 2rem 2rem;
    text-decoration: none;
    color: var(--clr-text);
    font-weight: bold;
    font-size: 1.25rem;
    text-align: center;
  }

  .nav__links > li a.link-active {
    color: var(--clr-primary);
    font-weight: bold;
  }

  @media (min-width: 60rem) {
    .nav-container {
      margin-block: 1.5rem;
      padding-block: 0.5rem;
      background-color: transparent;
      transition: background-color 250ms ease-out;
    }

    .nav-container-sticky {
      background-color: var(--clr-bg);
    }

    .nav__menu {
      display: none;
    }

    .nav__links {
      position: initial;
      opacity: 1;
      transform: translateX(0%);
      display: flex;
      gap: 3rem;
      z-index: 98;
      background-color: transparent;
    }

    .nav__links > li a {
      padding: 0;
      font-size: 1rem;
      font-weight: normal;
    }
  }
</style>
