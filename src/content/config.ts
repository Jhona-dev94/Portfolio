import { defineCollection, z } from "astro:content";

const techStack = defineCollection({
    schema: z.object({
        label: z.string(),
        name: z.string(),
        icon: z.string(),
        tooltip: z.string(),
    }),
});

export const collections = {
    techStack
};