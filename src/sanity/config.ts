export const sanityConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  useCdn: false,
  apiVersion: "2026-06-05",
} as const;
