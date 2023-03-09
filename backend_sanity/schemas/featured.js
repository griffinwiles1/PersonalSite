export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'featuredLink',
      title: 'Featured Link',
      type: 'string',
    },
  ]
}