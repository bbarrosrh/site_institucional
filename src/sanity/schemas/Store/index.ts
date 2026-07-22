import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Produtos",
  type: "document",
  fields: [
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
      name: "coverImage",
      title: "Foto de capa",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "gallery",
      title: "Mais fotos do produto",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (R) => R.max(5),
    }),
    defineField({
      name: "price",
      title: "Preço",
      type: "number",
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: "specifications",
      title: "Especificações",
      type: "array",
      of: [
        {
          type: "object",
          name: "specification",
          title: "Especificação",
          fields: [
            defineField({
              name: "label",
              title: "Especificação",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "value",
              title: "Descrição",
              type: "string",
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "soldOut",
      title: "Esgotado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Em destaque",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "price", media: "coverImage" },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: typeof subtitle === "number" ? `R$ ${subtitle.toFixed(2).replace(".", ",")}` : "",
        media,
      };
    },
  },
});

export const storeHeroSlideSchema = defineType({
  name: "storeHeroSlide",
  title: "Slides do Carrossel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "desktopImage",
      title: "Imagem (desktop)",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "mobileImage",
      title: "Imagem (mobile)",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "ctaText",
      title: "Texto do botão",
      type: "string",
    }),
    defineField({
      name: "ctaProduct",
      title: "Produto do botão",
      type: "reference",
      to: [{ type: "product" }],
      options: {
        filter: "soldOut != true",
      },
    }),
  ],
  preview: {
    select: { title: "title", media: "desktopImage" },
  },
});
