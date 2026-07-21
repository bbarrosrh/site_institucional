import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Depoimentos",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "role",
      title: "Profissão",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "quote",
      title: "Descrição",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
