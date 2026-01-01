import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string(),
    }),
  }),
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.coerce.date(),
    }),
  }),
};
