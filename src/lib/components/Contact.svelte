<script>
  import svg from "$lib/assets/main/contact.svg"
</script>

<svg
  viewBox="0 0 1920 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="rotate: 180deg"
>
  <path d="M0 0H1920V11L0 39V0Z" fill="#1e1e1e" fill-opacity="1" />
</svg>
<div class="contact" id="kontakt">
  <div class="wrapper">
    <h2><span>Skontaktuj Się</span> ze mną!</h2>
    <div class="contact__form">
      <form
        action="https://formsubmit.co/4f54c05c48883ae4c32bb4ded85fa282"
        method="POST"
      >
        <label for="name"><span>Twoje</span> Imię:</label>
        <input id="name" type="text" name="Imię" required />
        <label for="email"><span>Twój</span> Email:</label>
        <input id="email" type="email" name="Email" required />
        <label for="title">Tytuł wiadomości:</label>
        <input id="title" type="text" name="Tytuł" required />
        <label for="message">Wiadomość:</label>
        <textarea id="message" name="Wiadomość"></textarea>
        <input type="text" name="_honey" style="display:none" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          value="https://adamusdev.netlify.app/wyslane"
        />
        <button class="btn contact__btn" type="submit" data-btn-fit>
          Wyślij wiadomość
        </button>
      </form>
      <div class="contact__form__svg">
        <img src={svg} alt="Kontakt" />
      </div>
    </div>
  </div>
</div>

<style>
  .contact {
    scroll-margin-top: 6rem;
    background-color: var(--clr-bg-secondary);
    padding-top: 1rem;
  }

  .contact form {
    font-weight: 700;
    margin-top: 1rem;
  }

  :where(.contact form > * + *) {
    margin-top: 0.5em;
  }

  .contact form :is(label, input, textarea) {
    display: block;
    width: 100%;
    font-family: inherit;
  }

  .contact form :is(input, textarea) {
    background-color: var(--clr-input);
    border: 0;
    padding: 0.5em 1em;
    border-radius: 0.25rem;
    color: var(--clr-text);
  }

  .contact form textarea {
    min-height: 10rem;
    resize: vertical;
  }

  .contact__form__svg {
    display: none;
  }

  .contact__btn {
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  @media (min-width: 60rem) {
    .contact__form {
      display: grid;
      grid-template-areas: "form svg";
      grid-template-columns: 1fr 40%;
      gap: 7.5rem;
      margin-top: 2rem;
    }

    .contact__form form {
      margin-top: 0;
    }

    .contact__form__svg {
      display: block;
    }

    .contact__btn {
      width: fit-content;
    }
  }
</style>
