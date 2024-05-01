import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "content",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "Portfolio",
        path: "/src/routes/portfolio/content",
        defaultItem: () => {
          return {
            isFeatured: false,
            title: "Nowy Projekt",
            body: "Tresc projektu",
          }
        },
        fields: [
          {
            type: "boolean",
            name: "isFeatured",
            label: "Wyróżniony",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "github",
            label: "Github",
            required: true,
          },
          {
            type: "string",
            name: "link",
            label: "Link",
            required: true,
          },
          {
            type: "image",
            name: "imgs",
            label: "Zdjęcia",
            required: true,
            list: true,
          },
          {
            type: "object",
            name: "tools",
            label: "Narzędzia",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}`}
              },
            },
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Ikona",
                required: true,
              },
              {
                type: "string",
                name: "name",
                label: "Nazwa",
                required: true,
              },
              {
                type: "string",
                name: "href",
                label: "Link",
                required: true,
              },
            ]
          },
          {
            type: "object",
            name: "team",
            label: "Zespół",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}`}
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nazwa",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Ikona",
                required: true,
              },
              {
                type: "string",
                name: "link",
                label: "Link",
                required: true,
              },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
