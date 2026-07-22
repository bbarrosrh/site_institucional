export type Product = {
  name: string;
  description: string;
  price: string;
};

const LOREM_LONG =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.";

const LOREM_SHORT =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text.";

export const featuredProducts: Product[] = [
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    description: LOREM_SHORT,
    price: "49,90",
  },
  {
    name: "Lorem Ipsum Dolor",
    description: LOREM_LONG,
    price: "24,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "69,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "29,90",
  },
];

export const products: Product[] = [
  {
    name: "Lorem Ipsum Dolor",
    description: LOREM_SHORT,
    price: "24,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "69,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    description: LOREM_LONG,
    price: "49,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "69,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    description: LOREM_LONG,
    price: "49,90",
  },
  {
    name: "Lorem Ipsum Dolor",
    description: LOREM_SHORT,
    price: "24,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    description: LOREM_LONG,
    price: "49,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "69,90",
  },
  {
    name: "Lorem Ipsum Dolor",
    description: LOREM_SHORT,
    price: "24,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet Consectetur",
    description: LOREM_LONG,
    price: "69,90",
  },
  {
    name: "Lorem Ipsum Dolor Sit Amet",
    description: LOREM_LONG,
    price: "49,90",
  },
  {
    name: "Lorem Ipsum Dolor",
    description: LOREM_SHORT,
    price: "24,90",
  },
];
