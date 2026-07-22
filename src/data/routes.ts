export const Route = {
  HOME: "/",
  ABOUT: "/sobre-nos",
  MENTORING: "/servicos/mentoria",
  ACADEMY: "/servicos/academy",
  BUSINESS: "/servicos/business",
  INSTITUTE: "/instituto",
  STORE: "/loja",
  PRIVACY_POLICY: "/politica-de-privacidade",
  NOT_FOUND: "/404",
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;
