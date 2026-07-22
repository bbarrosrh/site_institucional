import type { BlogPost, BlogPostFull } from "./data";

export const EXAMPLE_POST_SLUG = "bem-vindo-ao-blog";

export const exampleBlogPosts: BlogPost[] = [
  {
    title: "Clique para ver a página interna de exemplo",
    slug: EXAMPLE_POST_SLUG,
    publishedAt: "2026-01-10",
    author: "Equipe",
    description:
      "Este é um post de exemplo, exibido localmente porque nenhum projeto Sanity foi configurado ainda (ou ele ainda não tem posts publicados).",
    image: null,
  },
  {
    title: "Lorem Ipsum Dolor",
    slug: "teste-um",
    publishedAt: "2026-01-08",
    author: "Equipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
  {
    title: "Lorem Ipsum Dolor",
    slug: "teste-dois",
    publishedAt: "2026-01-05",
    author: "Equipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
  {
    title: "Lorem Ipsum Dolor",
    slug: "teste-tres",
    publishedAt: "2026-01-03",
    author: "Equipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
  {
    title: "Lorem Ipsum Dolor",
    slug: "teste-4",
    publishedAt: "2026-01-01",
    author: "Equipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
];

export const exampleBlogPostFull: BlogPostFull = {
  ...exampleBlogPosts[0],
  body: [
    {
      _key: "b1",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "s1",
          _type: "span",
          text: "Este é um post de exemplo, exibido localmente porque nenhum projeto Sanity foi configurado ainda (ou ele ainda não tem posts publicados).",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _key: "b2",
      _type: "block",
      style: "h4",
      children: [
        {
          _key: "s2",
          _type: "span",
          text: "Como conectar o Sanity",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _key: "b3",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "s3",
          _type: "span",
          text: "Preencha as variáveis em ",
          marks: [],
        },
        { _key: "s4", _type: "span", text: ".env", marks: ["strong"] },
        {
          _key: "s5",
          _type: "span",
          text: " com os dados do seu projeto e publique o conteúdo no Studio para substituir estes exemplos.",
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _key: "b4",
      _type: "quote",
      text: "Os outros 4 posts da listagem são só ilustrativos e não têm página de detalhe própria.",
      author: "Pessoa legal",
    },
  ],
};
