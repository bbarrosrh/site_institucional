export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  gallery: string[];
  specifications: ProductSpecification[];
  price: number;
  soldOut: boolean;
  featured: boolean;
}

const PRODUCT_PROJECTION = `{
  _id,
  title,
  description,
  "coverImage": coverImage.asset->url,
  "gallery": coalesce(gallery[].asset->url, []),
  "specifications": coalesce(specifications[]{label, value}, []),
  price,
  soldOut,
  featured,
}`;

export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...4] ${PRODUCT_PROJECTION}`;

export const RECENT_PRODUCTS_QUERY = `*[_type == "product" && !(_id in $excludeIds)] | order(_createdAt desc) [0...$limit] ${PRODUCT_PROJECTION}`;

export const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) ${PRODUCT_PROJECTION}`;

export interface StoreHeroSlide {
  title: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
  ctaText: string | null;
  ctaProduct: Product | null;
}

export const STORE_HERO_SLIDES_QUERY = `*[_type == "storeHeroSlide"] | order(_createdAt asc) {
  title,
  subtitle,
  "desktopImage": desktopImage.asset->url,
  "mobileImage": mobileImage.asset->url,
  ctaText,
  "ctaProduct": ctaProduct-> ${PRODUCT_PROJECTION},
}`;
