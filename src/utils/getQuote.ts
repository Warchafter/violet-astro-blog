import {
    type QuoteResponse,
    QuoteResponseSchema,
    type QuoteType,
    type APIResult
} from "./types";

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