import { type QuoteResponse, QuoteResponseSchema } from "./types";

// type QuoteType = number | "random" | "quote-of-the-day";
type QuoteType =
    | { type: "random" }
    | { type: "quote-of-the-day" }
    | { id: number };

type APIResult<T> = { success: true; data: T } | { success: false; error: string };

export default async function getQuote(quoteInput: QuoteType): Promise<APIResult<QuoteResponse>> {
    const baseAPIUrl = "https://www.quoterism.com/api/quotes/";
    const url = baseAPIUrl + ("id" in quoteInput ? quoteInput.id.toString() : quoteInput.type);
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        const result = QuoteResponseSchema.safeParse(json);
        
        if (!result.success) {
            console.error(result.error);
            throw new Error(`Invalid response format: ${result.error.message}`);
        }
        
        return { success: true, data: result.data };
    } catch (error: any) {
        console.error("Fetch error: ", error.message);
        return { success: false, error: error.message };
    }
}