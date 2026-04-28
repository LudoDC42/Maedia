import { createClient } from '@sanity/client';
import type { SanityImageSource } from '@sanity/image-url';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'dnpv7lg1', // Remplace par ton ID de projet Sanity
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}