<div class="about wrapper">
  <div class="about__photo">
    <img src="$lib/assets/photo-resized.jpg" alt="Kacper Adamus" />
  </div>
  <div class="about__text">
    <div class="about__text__heading">
      <h2>Kacper Adamus</h2>
      <a href="https://github.com/hpixsel" target="_blank">
        <svg viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.5958 0C21.3659 0 18.1675 0.636191 15.1834 1.87225C12.1993 3.1083 9.48789 4.92002 7.20396 7.20396C2.59134 11.8166 0 18.0726 0 24.5958C0 35.4672 7.05901 44.6907 16.8236 47.9619C18.0534 48.1587 18.4469 47.3962 18.4469 46.7321V42.5754C11.6338 44.0512 10.1827 39.2796 10.1827 39.2796C9.05127 36.4264 7.45254 35.664 7.45254 35.664C5.21432 34.139 7.62471 34.1882 7.62471 34.1882C10.0843 34.3604 11.3879 36.7216 11.3879 36.7216C13.5277 40.4602 17.1433 39.3534 18.5453 38.7631C18.7666 37.1643 19.4061 36.0821 20.0948 35.4672C14.6345 34.8523 8.9037 32.7371 8.9037 23.3661C8.9037 20.6359 9.83834 18.4469 11.4371 16.7006C11.1911 16.0857 10.3303 13.5277 11.683 10.2073C11.683 10.2073 13.7491 9.54319 18.4469 12.7161C20.39 12.1749 22.5052 11.9044 24.5958 11.9044C26.6865 11.9044 28.8017 12.1749 30.7448 12.7161C35.4426 9.54319 37.5087 10.2073 37.5087 10.2073C38.8614 13.5277 38.0006 16.0857 37.7546 16.7006C39.3534 18.4469 40.288 20.6359 40.288 23.3661C40.288 32.7617 34.5326 34.8277 29.0477 35.4426C29.9331 36.2051 30.7448 37.7054 30.7448 39.9928V46.7321C30.7448 47.3962 31.1383 48.1833 32.3927 47.9619C42.1573 44.6661 49.1917 35.4672 49.1917 24.5958C49.1917 21.3659 48.5555 18.1675 47.3194 15.1834C46.0834 12.1993 44.2717 9.48789 41.9877 7.20396C39.7038 4.92002 36.9924 3.1083 34.0083 1.87225C31.0242 0.636191 27.8258 0 24.5958 0Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
    <p>
      Jestem <span>Front-End developerem</span> (z drobną wiedzą o Back-Endzie)
      oraz
      <span>web designerem</span> z zamiłowaniem do komputerów i wszelakiej technologii.
      Jak na ten moment skończyłem technikum na kierunku informatycznym i szukam
      możliwości dalszego rozwoju.
    </p>
    <p>
      Zawsze ciekawiło mnie, jak technologia działa za kulisami. Dlatego
      zacząłem uczyć się programowania, pierwszym językiem jakiego zacząłem się
      uczyć był C++. Jakiś czas później nauczyłem się
      <span>HTML’a i CSS’a</span> i od tamtego momentu zostałem przy tworzeniu stron
      internetowych, w wolnym czasie ucząc się nowych rzeczy.
    </p>
  </div>
  <div class="about__bg">
    <img src="$lib/assets/main/bg.jpeg" alt="Background" />
  </div>
</div>

<style>
  .about {
    margin-block: 1rem;
    position: relative;
  }

  .about__photo {
    border-radius: 0.25rem;
    border: 1px solid var(--clr-primary);
    overflow: hidden;
  }

  .about__photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about__text {
    margin-top: 1rem;
  }

  .about__text__heading {
    display: flex;
    gap: 1rem;
  }

  .about__text__heading a {
    width: 1.5em;
  }

  .about__text p {
    margin-top: 0.5em;
    text-align: justify;
  }

  .about__bg {
    position: absolute;
    bottom: 5rem;
    transform: scaleY(2.5);
    left: 0;
    right: 0;
    filter: grayscale(1);
    z-index: -1;
  }

  @media (min-width: 60rem) {
    .about {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 8rem;
      padding-block: 6rem;
      margin-block: 0;
    }

    .about__text p {
      text-align: left;
    }

    .about__photo {
      width: 150%;
    }

    .about__bg {
      transform: scaleY(1);
      inset: 0;
    }
    .about__bg > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
</style>
