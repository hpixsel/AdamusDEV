import { c as create_ssr_component, d as add_attribute, f as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
const css$2 = {
  code: ".about.svelte-cb5ec6.svelte-cb5ec6{margin-block:1rem;position:relative}.about__photo.svelte-cb5ec6.svelte-cb5ec6{border-radius:0.25rem;border:1px solid var(--clr-primary);overflow:hidden}.about__text.svelte-cb5ec6.svelte-cb5ec6{margin-top:1rem}.about__text__heading.svelte-cb5ec6.svelte-cb5ec6{display:flex;gap:1rem}.about__text__heading.svelte-cb5ec6 a.svelte-cb5ec6{width:1.5em}.about__text.svelte-cb5ec6 p.svelte-cb5ec6{margin-top:0.5em;text-align:justify}.about__bg.svelte-cb5ec6.svelte-cb5ec6{position:absolute;bottom:5rem;transform:scaleY(2.5);left:0;right:0;filter:grayscale(1);z-index:-1}@media(min-width: 60rem){.about.svelte-cb5ec6.svelte-cb5ec6{display:flex;flex-direction:row-reverse;gap:8rem;padding-block:6rem;margin-block:0}.about__text.svelte-cb5ec6 p.svelte-cb5ec6{text-align:left}.about__bg.svelte-cb5ec6.svelte-cb5ec6{transform:scaleY(1);inset:0}.about__bg.svelte-cb5ec6>img.svelte-cb5ec6{object-fit:contain;width:100%;height:100%}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="about wrapper svelte-cb5ec6" data-svelte-h="svelte-uwcp5o"><div class="about__photo svelte-cb5ec6"><img src="/src/lib/assets/photo.jpeg" alt="Kacper Adamus"></div> <div class="about__text svelte-cb5ec6"><div class="about__text__heading svelte-cb5ec6"><h2>Kacper Adamus</h2> <a href="https://github.com/hpixsel" target="_blank" class="svelte-cb5ec6"><svg viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5958 0C21.3659 0 18.1675 0.636191 15.1834 1.87225C12.1993 3.1083 9.48789 4.92002 7.20396 7.20396C2.59134 11.8166 0 18.0726 0 24.5958C0 35.4672 7.05901 44.6907 16.8236 47.9619C18.0534 48.1587 18.4469 47.3962 18.4469 46.7321V42.5754C11.6338 44.0512 10.1827 39.2796 10.1827 39.2796C9.05127 36.4264 7.45254 35.664 7.45254 35.664C5.21432 34.139 7.62471 34.1882 7.62471 34.1882C10.0843 34.3604 11.3879 36.7216 11.3879 36.7216C13.5277 40.4602 17.1433 39.3534 18.5453 38.7631C18.7666 37.1643 19.4061 36.0821 20.0948 35.4672C14.6345 34.8523 8.9037 32.7371 8.9037 23.3661C8.9037 20.6359 9.83834 18.4469 11.4371 16.7006C11.1911 16.0857 10.3303 13.5277 11.683 10.2073C11.683 10.2073 13.7491 9.54319 18.4469 12.7161C20.39 12.1749 22.5052 11.9044 24.5958 11.9044C26.6865 11.9044 28.8017 12.1749 30.7448 12.7161C35.4426 9.54319 37.5087 10.2073 37.5087 10.2073C38.8614 13.5277 38.0006 16.0857 37.7546 16.7006C39.3534 18.4469 40.288 20.6359 40.288 23.3661C40.288 32.7617 34.5326 34.8277 29.0477 35.4426C29.9331 36.2051 30.7448 37.7054 30.7448 39.9928V46.7321C30.7448 47.3962 31.1383 48.1833 32.3927 47.9619C42.1573 44.6661 49.1917 35.4672 49.1917 24.5958C49.1917 21.3659 48.5555 18.1675 47.3194 15.1834C46.0834 12.1993 44.2717 9.48789 41.9877 7.20396C39.7038 4.92002 36.9924 3.1083 34.0083 1.87225C31.0242 0.636191 27.8258 0 24.5958 0Z" fill="white"></path></svg></a></div> <p class="svelte-cb5ec6">Jestem <span>Front-End developerem</span> (z drobną wiedzą o Back-Endzie)
      oraz
      <span>web designerem</span> z zamiłowaniem do komputerów i wszelakiej technologii,
      jak na ten moment uczę się w technikum na kierunku informatycznym.</p> <p class="svelte-cb5ec6">Zawsze ciekawiło mnie, jak technologia działa za kulisami. Dlatego
      zacząłem uczyć się programowania, pierwszym językiem jakiego zacząłem się
      uczyć był C++. Jakiś czas później nauczyłem się
      <span>HTML’a i CSS’a</span> i od tamtego momentu zostałem przy tworzeniu stron
      internetowych, w wolnym czasie ucząc się nowych rzeczy.</p></div> <div class="about__bg svelte-cb5ec6"><img src="/src/lib/assets/main/bg.jpeg" alt="Background" class="svelte-cb5ec6"></div> </div>`;
});
const css$1 = {
  code: ".technology.svelte-1w8dyrm.svelte-1w8dyrm{display:flex;align-items:center;gap:1rem;background-color:var(--clr-bg-secondary);width:fit-content;padding:0.5rem 1rem;color:var(--clr-text);text-decoration:none;border-radius:0.125rem;border:1px solid rgb(75, 75, 75);flex-grow:1;justify-content:center}.technology.svelte-1w8dyrm img.svelte-1w8dyrm{height:2em}@media(min-width: 60rem){.technology.svelte-1w8dyrm.svelte-1w8dyrm{min-width:15rem;font-size:1.125rem;padding-block:0.75rem}}",
  map: null
};
const Technology = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon, name, href } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", href, 0)} class="technology svelte-1w8dyrm" target="_blank"><img${add_attribute("src", "/src/lib/assets/svg/" + icon + ".svg", 0)}${add_attribute("alt", name, 0)} class="svelte-1w8dyrm"> <h3>${escape(name)}</h3> </a>`;
});
const better = [
  {
    icon: "html",
    name: "HTML",
    href: "https://astro.build/"
  },
  {
    icon: "css",
    name: "CSS",
    href: "https://svelte.dev/"
  },
  {
    icon: "js",
    name: "JavaScript",
    href: "https://svelte.dev/"
  },
  {
    icon: "react",
    name: "ReactJS",
    href: "https://svelte.dev/"
  },
  {
    icon: "nextjs",
    name: "NextJS",
    href: "https://svelte.dev/"
  },
  {
    icon: "gatsby",
    name: "Gatsby",
    href: "https://svelte.dev/"
  },
  {
    icon: "git",
    name: "Git",
    href: "https://svelte.dev/"
  },
  {
    icon: "figma",
    name: "Figma",
    href: "https://svelte.dev/"
  },
  {
    icon: "netlify",
    name: "Netlify",
    href: "https://svelte.dev/"
  }
];
const less = [
  {
    icon: "astro",
    name: "Astro",
    href: "https://astro.build/"
  },
  {
    icon: "svelte",
    name: "Svelte",
    href: "https://svelte.dev/"
  },
  {
    icon: "strapi",
    name: "Strapi",
    href: "https://svelte.dev/"
  },
  {
    icon: "phpmyadmin",
    name: "phpMyAdmin",
    href: "https://svelte.dev/"
  },
  {
    icon: "mysql",
    name: "MySQL",
    href: "https://svelte.dev/"
  },
  {
    icon: "php",
    name: "PHP",
    href: "https://svelte.dev/"
  },
  {
    icon: "python",
    name: "Python",
    href: "https://svelte.dev/"
  }
];
const technologies = {
  better,
  less
};
const css = {
  code: ".technologies--container.svelte-1kksa2c.svelte-1kksa2c{padding-block:3rem;position:relative;margin-block:1rem}.technologies.svelte-1kksa2c h1.svelte-1kksa2c{font-size:1.1rem}.technologies__grid.svelte-1kksa2c.svelte-1kksa2c{display:flex;flex-wrap:wrap;gap:0.5rem}.technologies__grid.svelte-1kksa2c.svelte-1kksa2c{margin-top:2rem}.technologies__bg.svelte-1kksa2c.svelte-1kksa2c{position:absolute;inset:0;z-index:-1;border:5px solid rgb(75, 75, 75);border-left:0;border-right:0;opacity:2.5%}.technologies__bg.svelte-1kksa2c img.svelte-1kksa2c{object-fit:cover;width:100%;height:100%}@media(min-width: 60rem){.technologies.svelte-1kksa2c h1.svelte-1kksa2c{font-size:2rem;text-align:center}}",
  map: null
};
const Technologies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(technologies);
  $$result.css.add(css);
  return `<div class="technologies--container svelte-1kksa2c"><div class="technologies wrapper svelte-1kksa2c"><h1 class="svelte-1kksa2c" data-svelte-h="svelte-142nxr">Technologie, z którymi pracowałem</h1> <div class="technologies__grid svelte-1kksa2c">${each(technologies.better, (technology) => {
    return `${validate_component(Technology, "Technology").$$render(
      $$result,
      {
        icon: technology.icon,
        name: technology.name,
        href: technology.href
      },
      {},
      {}
    )}`;
  })}</div> <div class="technologies__grid svelte-1kksa2c">${each(technologies.less, (technology) => {
    return `${validate_component(Technology, "Technology").$$render(
      $$result,
      {
        icon: technology.icon,
        name: technology.name,
        href: technology.href
      },
      {},
      {}
    )}`;
  })}</div></div> <div class="technologies__bg svelte-1kksa2c" data-svelte-h="svelte-1ita0is"><img src="/src/lib/assets/technology-bg.png" alt="Technologies" class="svelte-1kksa2c"></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Technologies, "Technologies").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
