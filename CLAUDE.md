# CLAUDE.md

Guia rápido de estrutura e convenções do template (Astro + React + Sanity + Tailwind v4).

## Stack e comandos

- `npm run dev` / `npm run build` / `npm run preview`
- Alias de import: `@/*` → `src/*` (ver [tsconfig.json](tsconfig.json) e [astro.config.mjs](astro.config.mjs))
- Sanity Studio embutido em `/studio` (config em [sanity.config.ts](sanity.config.ts), na raiz — não em `src/`)

## Verificação

Ao terminar um pedido, rode só `npx astro check`. Não suba servidor de dev nem verifique via
navegador/curl — isso não substitui o feedback visual real do usuário e é desnecessário para
validar que o código compila.

## Estrutura de pastas

Nomes de pasta (`components/Sections/<Página>/`, `data/<Página>/`, `assets/images/<Página>/`,
`sanity/schemas/<Nome>/`) são **sempre em inglês**, mesmo em páginas cujo conteúdo é em português
(ex.: `Sections/Home/`, não `Sections/Inicio/`; `sanity/schemas/Testimonials/`, não
`schemas/Depoimentos/`).

```
src/
├── components/
│   ├── Layout/         # Root.astro (shell HTML), SEO.astro, Section/index.astro (wrapper de seção)
│   ├── Navbar/         # ilha React (client:load), MobileMenu.tsx separado
│   ├── Footer/
│   ├── Sections/       # seções de página — arquivo direto ou pasta, agrupadas por página, ver convenção abaixo
│   ├── Icon/           # wrapper de @tabler/icons-react
│   ├── Button.tsx
│   └── PortableText.astro
├── data/                # constantes de conteúdo estático, agrupadas por página, ver convenção abaixo
├── assets/images/       # imagens estáticas, agrupadas por página, ver convenção abaixo
├── sanity/
│   ├── config.ts        # projectId/dataset lidos de env (PUBLIC_SANITY_*)
│   ├── client.ts         # sanityFetch() — cache em dev, degrada para null em erro
│   └── schemas/<Nome>/   # um schema por pasta, ver convenção abaixo
├── pages/                # rotas do Astro (file-based routing)
├── styles/               # global.css (tokens @theme), utilities.css, scrollbar.css
└── utils/className.ts    # cn() = clsx + tailwind-merge
```

## `.astro` vs `.tsx`

Padrão é `.astro` (zero JS no cliente). Só use `.tsx` (React) quando precisar de interatividade no
cliente — ex.: `Navbar` (estado de scroll + menu mobile) — e hidrate a ilha no ponto de uso com
`client:load`/`client:visible`. `Button` e `Icon` são `.tsx` por serem usados dentro dessas ilhas.

## Convenção de seções de página

Cada seção visual vive em `src/components/Sections/`. Só cria pasta se a seção tiver mais de um
arquivo (sub-componentes); se for um único arquivo, fica direto na pasta da página, sem pasta própria.

- `Sections/Home/Stats.astro` — arquivo único
- `Sections/Home/HeroBanner/index.astro` — pasta, porque tem `BannerDecoration.tsx` como
  sub-componente além do `index.astro`

Seções que pertencem exclusivamente a uma página ficam numa subpasta com o nome da página
(`Sections/Home/`, `Sections/About/`, `Sections/BlogIntern/` para a página interna do blog,
etc.). **Seções reutilizadas entre mais de uma página ficam em `Sections/Shared/`**, como
`Sections/Shared/CallToAction.astro`, `Sections/Shared/MiniHeroBanner/` e
`Sections/Shared/CardCarousel/`.

Páginas em `src/pages/` são a camada de composição: montam seções dentro de `<Root>`. Uma página
simples só empilha seções; uma rota dinâmica (`blog/[slug].astro`) além disso faz o próprio fetch
no frontmatter e trata os dados.

```astro
<Root title="Home">
  <HeroBanner />
  <BlogSection />
</Root>
```

Layout de seção: use `Layout/Section/index.astro` (props `id`, `secondary`, `backgroundImage`,
`noPbMobile`) quando a seção segue o padrão `section-wrapper` + `section-container` do
[utilities.css](src/styles/utilities.css). O `HeroBanner` não usa esse wrapper porque tem layout
full-screen próprio.

## Convenção de `data/` e `assets/images/`

Nunca declare conteúdo estático (arrays/objetos de texto, links, etc.) direto no frontmatter de um
componente — extraia para um arquivo em `src/data/`. O mesmo agrupamento por página do
`Sections/` se aplica aqui e em `src/assets/images/`:

- Conteúdo/imagem exclusivo de uma página vai em `data/<Página>/` ou `assets/images/<Página>/`
  (ex.: `data/Home/stats.ts`, `assets/images/Home/venus.png`).
- Conteúdo/imagem reutilizado por mais de uma página fica solto direto em `data/` ou
  `assets/images/`, sem subpasta (ex.: `data/navbar.ts`, `data/footer.ts`, `assets/images/logo_white.svg`,
  usados em toda página via `Navbar`/`Footer`).

Se um componente monta itens dinamicamente a partir de props em tempo de render (ex.: `href` de
compartilhamento social calculado a partir da URL do post), isso é lógica, não conteúdo — não
precisa ser extraído para `data/`.

## Convenção do Sanity

Cada tipo de conteúdo tem sua pasta em `src/sanity/schemas/<Nome>/` (`<Nome>` em inglês, ver
[Estrutura de pastas](#estrutura-de-pastas)):

- `index.ts` — `defineType`/`defineField` do schema (registrado em [sanity.config.ts](sanity.config.ts))
- `data.ts` — tipos TS do conteúdo + queries GROQ (consumidos pelo lado Astro)

`sanityFetch<T>()` ([sanity/client.ts](src/sanity/client.ts)) retorna `Promise<T | null>`: nunca
lança erro — em falha loga um aviso e retorna `null`. Cada consumidor decide o que fazer com o
`null` conforme a página (estado vazio, `Astro.redirect("/404")`, etc.).

Variáveis de ambiente (ver [.env.example](.env.example)): `PUBLIC_SANITY_PROJECT_ID` e
`PUBLIC_SANITY_DATASET` são públicas; `SANITY_TOKEN` é server-only, nunca deve ir para o cliente
nem para o git.

## Andaime do template (remover ao usar de verdade)

Para o template rodar sem um projeto Sanity configurado, o exemplo de blog tem fallback estático —
isso **não é convenção do projeto**, é só andaime:

- `schemas/Blog/exampleData.ts` — posts fictícios
- os call sites do blog caem nesse exemplo quando o fetch volta vazio.

Ao começar a usar de verdade, apague `exampleData.ts` e remova esses branches — o fetch real não
tem fallback hardcoded (trata o `null`/vazio como a página precisar).

## Responsividade

- "Mobile", quando mencionado nas instruções, sempre significa `< lg` (abaixo do breakpoint `lg`
  do Tailwind, 1024px) — não confundir com o breakpoint `sm`/`md`.
- Título, subtítulo e eyebrow de seção ficam centralizados no mobile (`< lg`), mesmo quando o
  layout de desktop é alinhado à esquerda/direita — ex.: `class="text-center lg:text-left"`.
- Conteúdo dentro de um card (ou estrutura parecida — ex.: `ProgramCard`) continua alinhado à
  esquerda no mobile, sem centralizar — essa regra de centralizar é só pra título/subtítulo/eyebrow
  de seção, não pra qualquer texto.

## Estilo

- Tailwind v4, sem arquivo de config — tokens de tema ficam no bloco `@theme` de
  [global.css](src/styles/global.css) (`--color-primary`, `--font-sans`, etc.)
- Classes utilitárias custom (`section-container`, `section-title`, `full-bleed`, `bleed-right`,
  `container-pl`, ...) em [utilities.css](src/styles/utilities.css), via `@utility`. `bleed-right`
  remove o padding direito do `section-container` pra um elemento vazar até a borda; `container-pl`
  é o inverso — aplica o mesmo inset esquerdo do `section-container` num elemento que não está
  dentro de um (ex.: uma seção full-bleed onde só um lado deve alinhar com o resto do site)
- Fonte é Inter, carregada por `<link>` do Google Fonts em [Root.astro](src/components/Layout/Root.astro)
- Sempre componha classes condicionais com `cn()` ([utils/className.ts](src/utils/className.ts)),
  nunca concatenação de string manual
- Não usar `transition-colors`, `transition-all`, `duration-*` etc. em estados de `hover:` — a
  mudança deve ser instantânea, sem transição

## Ícones

- Ícones de UI (menu, setas) usam o componente `Icon` + mapa em
  [Icon/IconName.tsx](src/components/Icon/IconName.tsx) (Tabler Icons)
- Logos de marca (redes sociais no Footer) usam SVG inline com o path oficial da marca, não use Tabler nesse caso.

## Imagens

- Toda imagem estática (asset local importado, raster) usa `<Image>` de `astro:assets` com
  `format="webp"` por padrão — nunca `<img src={x.src}>` puro. Só use `<img>` quando houver motivo
  específico: SVG (logos, decorações vetoriais — converter pra webp seria perder escalabilidade), ou
  URL dinâmica/remota (ex.: foto vinda do Sanity, que já é otimizada pelo próprio CDN).
- Dentro de ilhas React (`.tsx`), `<Image>` não pode ser usado diretamente (é um componente Astro).
  Resolva a imagem no `.astro` pai com `getImage()` de `astro:assets` e passe a URL já processada
  (string) como prop pro componente React.
- Se o tamanho de exibição for bem menor que a resolução da imagem-fonte, passe `width` (ou
  `widths`/`sizes` para `srcset` responsivo) — sem isso, `<Image>` só recomprime no tamanho
  original, sem redimensionar.
