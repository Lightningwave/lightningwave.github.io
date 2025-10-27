import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const skills = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    level: z.string(),
    category: z.string(),
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    field: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.string()]),
    description: z.string().optional(),
  }),
});

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    link: z.string().optional(),
    status: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { work, projects, skills, education, certifications };
