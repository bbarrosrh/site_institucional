import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityConfig } from "./src/sanity/config";
import { blogPostSchema } from "./src/sanity/schemas/Blog";
import { testimonialSchema } from "./src/sanity/schemas/Testimonials";
import { mentorSchema, partnerSchema } from "./src/sanity/schemas/People";

export default defineConfig({
  ...sanityConfig,
  title: "Content Studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conteúdo")
          .items([
            S.documentTypeListItem("blogPost").title("Blog"),
            S.documentTypeListItem("testimonial").title("Depoimentos"),
            S.listItem()
              .title("Pessoas")
              .child(
                S.list()
                  .title("Pessoas")
                  .items([
                    S.documentTypeListItem("mentor").title("Mentores"),
                    S.documentTypeListItem("partner").title("Parceiros"),
                  ])
              ),
          ]),
    }),
  ],
  schema: {
    types: [blogPostSchema, testimonialSchema, mentorSchema, partnerSchema],
  },
});
