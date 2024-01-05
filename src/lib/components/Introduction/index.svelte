<script>
  import Divider from "$lib/assets/main/divider.svg"
  import Photo from "$lib/assets/photo.jpeg"
</script>

<div class="intro-container">
  <img src={Divider} style="rotate: 180deg" alt="section-divider" />
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
  <img src={Divider} alt="section-divider" />
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
</style>
