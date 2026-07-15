import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityConfig } from "./src/sanity/config";
import { blogPostSchema } from "./src/sanity/schemas/Blog";

export default defineConfig({
  ...sanityConfig,
  title: "Content Studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conteúdo")
          .items([S.documentTypeListItem("blogPost").title("Blog")]),
    }),
  ],
  schema: {
    types: [blogPostSchema],
  },
});
