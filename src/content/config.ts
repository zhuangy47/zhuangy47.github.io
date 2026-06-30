import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const dumping = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    url: z.string().url(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, dumping };
