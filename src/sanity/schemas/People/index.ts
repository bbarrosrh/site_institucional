import { defineField, defineType } from "sanity";

const personFields = [
  defineField({
    name: "name",
    title: "Nome",
    type: "string",
    validation: (R) => R.required(),
  }),
  defineField({
    name: "title",
    title: "Título",
    type: "string",
    validation: (R) => R.required(),
  }),
  defineField({
    name: "description",
    title: "Descrição",
    type: "text",
    rows: 4,
    validation: (R) => R.required(),
  }),
  defineField({
    name: "location",
    title: "Localização",
    type: "string",
    validation: (R) =>
      R.required()
        .regex(/ \/ [A-Za-z]{2}$/, { name: "Cidade / UF" })
        .error("Por favor, siga o formato Cidade / UF"),
  }),
  defineField({
    name: "education",
    title: "Escolaridade",
    type: "string",
    validation: (R) => R.required(),
  }),
  defineField({
    name: "photo",
    title: "Foto",
    type: "image",
    options: { hotspot: true },
    validation: (R) => R.required(),
  }),
  defineField({
    name: "linkedinHref",
    title: "Link do LinkedIn",
    type: "url",
    validation: (R) => R.uri({ scheme: ["http", "https"] }),
  }),
];

export const mentorSchema = defineType({
  name: "mentor",
  title: "Mentores",
  type: "document",
  fields: personFields,
  preview: {
    select: { title: "name", subtitle: "title", media: "photo" },
  },
});

export const partnerSchema = defineType({
  name: "partner",
  title: "Parceiros",
  type: "document",
  fields: personFields,
  preview: {
    select: { title: "name", subtitle: "title", media: "photo" },
  },
});
