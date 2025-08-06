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

// type QuoteType = number | "random" | "quote-of-the-day";
export type QuoteType =
    | { type: "random" }
    | { type: "quote-of-the-day" }
    | { id: number };

export type APIResult<T> = { success: true; data: T } | { success: false; error: string };