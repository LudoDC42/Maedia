export default {
  name: 'book',
  title: 'Livre',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Couverture',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'gallery',
      title: 'Galerie Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'videoUrl',
      title: 'URL Vidéo',
      type: 'file', // Changé de 'url' à 'file'
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}