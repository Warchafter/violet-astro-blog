import * as z from "zod/v4";

export const QuoteResponseSchema = z.object({
    id: z.string(),
    text: z.string(),
    author: z.object({
        id: z.string(),
        name: z.string()
    })
});

export type QuoteResponse = z.infer<typeof QuoteResponseSchema>;