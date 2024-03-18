import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'exper',
      title: 'Experience ID',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
        name: 'company',
        title: 'Company Name',
        type: 'string',
      }),
      defineField({
        name: 'jobDescription',
      title: 'Job Description',
      type: 'array',
      of: [{type: 'string'}],
      }), defineField({
        name: 'dateStarted',
        title: 'Date Started',
        type: 'date',
      }),
 
    defineField({
        name: 'dateStarted',
        title: 'Date Started',
        type: 'date',
      }),
      defineField({
        name: 'dateStarted',
        title: 'Date Completed',
        type: 'date',
      }),
    defineField({
      name: 'isCurrentJob',
      title: 'Current Staff',
      type: 'boolean',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
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
      name: 'technologyUsed',
      title: 'Technology Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Next.JS', value: 'Next.JS'},
          {title: 'React.js', value: 'React.js'},
          {title: 'Tailwind', value: 'Tailwind'},
          {title: 'CSS', value: 'CSS'},
          {title: 'GraphQl', value: 'GraphQL'},
          {title: 'TRPC', value: 'TRPC'},
          {title: 'Redux', value: 'Redux'},
          {title: 'Zustand', value: 'Zustand'},
          {title: 'Node JS', value: 'Node Js'},
          {title: 'Mongo-DB', value: 'Mongo db'},
          {title: 'FireBase', value: 'Firebase'}
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