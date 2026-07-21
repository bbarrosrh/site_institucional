export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt asc) {
  name,
  role,
  quote,
}`;
