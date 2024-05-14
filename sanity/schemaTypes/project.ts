import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectId',
      title: 'Project ID',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },{
      name: 'redirect_url',
      title: 'Redirect URL',
      type: 'url',
    },
    defineField({
      name: 'github_url',
      title: 'Github URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Feature',
      type: 'boolean',
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Next.JS', value: 'Next.JS'},
          {title: 'React.js', value: 'React.js'},
          {title: 'Tailwind', value: 'Tailwind'},
          {title: 'Sass', value: 'Sass'},
          {title: 'CSS', value: 'CSS'},
          {title: 'GraphQl', value: 'GraphQL'},
          {title: 'TRPC', value: 'TRPC'},
          {title: 'Redux', value: 'Redux'},
          {title: 'Zustand', value: 'Zustand'},
          {title: 'Node JS', value: 'Node Js'},
          {title: 'Mongo-DB', value: 'Mongo db'},
          {title: 'FireBase', value: 'Firebase'},
          {title,'TypeScript', value: 'TypeScript'}
        ]
      }
    }),
  ]
})



// options: {
//   list: [
//     {title: 'Next.JS', value: 'Next.JS'},
//     {title: 'React.js', value: 'React.js'},
//     {title: 'Tailwind', value: 'Tailwind'},
//     {title: 'CSS', value: 'CSS'},
//     {title: 'GraphQl', value: 'GraphQL'},
//     {title: 'TRPC', value: 'TRPC'},
//     {title: 'Redux', value: 'Redux'},
//     {title: 'Zustand', value: 'Zustand'},
//     {title: 'Node JS', value: 'Node Js'},
//     {title: 'Mongo-DB', value: 'Mongo db'},
//     {title: 'FireBase', value: 'Firebase'}
//   ]
// }
