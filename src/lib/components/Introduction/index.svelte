<script>
  import Photo from "$lib/assets/photo.jpeg"
</script>

<div class="intro-container">
  <svg
    viewBox="0 0 1920 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="rotate: 180deg"
  >
    <path d="M0 0H1920V11L0 39V0Z" fill="#1e1e1e" fill-opacity="1" />
  </svg>
  <div class="intro">
    <div class="wrapper">
      <div class="intro__text">
        <h2>Cześć jestem <span>Kacper!</span></h2>
        <p>
          W wolnym czasie zajmuje się tworzeniem stron internetowych. Pisanie
          kodu jest czymś co pozwala mi się odprężyć i zrelaksować. Pomimo
          trudności z tym związanymi, które próbują udowodnić, że jest inaczej,
          jest to coś do czego zawsze wracam i kocham to.
        </p>
        <p>
          Mogę dla ciebie wykonać różne strony od wizytówek, blogów po bardziej
          skomplikowane projekty.
        </p>
      </div>
      <div class="intro__img">
        <img src={Photo} alt="author-photography" />
      </div>
      <a href="/o-mnie" class="btn" data-btn-fit>Dowiedz Się Więcej</a>
    </div>
  </div>
  <svg viewBox="0 0 1920 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H1920V11L0 39V0Z" fill="#1e1e1e" fill-opacity="1" />
  </svg>
</div>

<style>
  .intro-container {
    margin-top: 6rem;
  }

  .intro {
    background-color: var(--clr-bg-secondary);
    padding-block: 2rem;
  }

  .intro__text p {
    margin-top: 1rem;
  }

  .intro__img {
    border-radius: 4px;
    border: 2px solid var(--clr-primary);
    margin-block: 2rem;
  }

  @media (min-width: 60rem) {
    .intro > div {
      display: grid;
      grid-template-areas:
        "text img"
        "btn  img";
      align-items: flex-start;
      gap: 3rem;
    }

    .intro__text {
      grid-area: text;
    }

    .intro__text p {
      margin-top: 1em;
    }

    .intro__img {
      grid-area: img;
      width: 20rem;
      margin: 0;
    }

    .intro a {
      grid-area: btn;
      margin-top: auto;
    }
  }
</style>
