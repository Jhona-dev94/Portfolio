import { defineCollection, z } from "astro:content";
import { string } from "astro:schema";

const techStack = defineCollection({
    schema: z.object({
        label: z.string(),
        name: z.string(),
        icon: z.string(),
        tooltip: z.string(),
    }),
});

const proyect = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        role: z.string(),
        stack: z.array(string()),
    }),
});

export const collections = {
    techStack, 
    proyect
};