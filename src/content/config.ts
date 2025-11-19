import { z, defineCollection } from "astro:content";

// 博客的规则（保持原样）
const blogSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine((items) => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
  }),
});

// 摄影集（原 Store）的规则
// 我们把所有价格相关的都改成了 .optional()
const storeSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    checkoutUrl: z.string().optional(),
    details: z.boolean().optional(),
    custom_link_label: z.string().optional(),
    custom_link: z.string().optional(),
  }),
});

// 导出规则
export const collections = {
  'blog': blogSchema,
  'store': storeSchema,
};