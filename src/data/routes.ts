export const Route = {
  HOME: "/",
  ABOUT: "/sobre-nos",
  MENTORING: "/servicos/mentoria",
  ACADEMY: "/servicos/academy",
  PRIVACY_POLICY: "/politica-de-privacidade",
  NOT_FOUND: "/404",
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;
