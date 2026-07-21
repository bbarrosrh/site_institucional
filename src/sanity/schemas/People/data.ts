export interface Person {
  name: string;
  title: string;
  description: string;
  location: string;
  education: string;
  photo: string | null;
  linkedinHref: string | null;
}

const PERSON_PROJECTION = `{
  name,
  title,
  description,
  location,
  education,
  "photo": photo.asset->url,
  linkedinHref,
}`;

export const MENTORS_QUERY = `*[_type == "mentor"] | order(name asc) ${PERSON_PROJECTION}`;

export const PARTNERS_QUERY = `*[_type == "partner"] | order(name asc) ${PERSON_PROJECTION}`;
