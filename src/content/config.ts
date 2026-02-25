import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      datetime: z.string(),
      image: z.string().optional(),
      charset: z.string().default("UTF-8"),
      keywords: z.string().optional(), 
    }),

});

export const collections = {
  'blogs': blogsCollection,
};