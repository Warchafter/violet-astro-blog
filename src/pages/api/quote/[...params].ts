import type { APIRoute } from "astro";
import getQuote from "~/utils/getQuote";
import { type QuoteType, type QuoteResponse } from "~/utils/types";

export const get: APIRoute = async ({ params }): Promise<Response> => {
    // params.params is an array of URL segments: e.g. ["random"] or ["123"]
    const [first] = params.params || [];
    if (!first) {
        return new Response(JSON.stringify({ error: "Missing ID" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    const input: QuoteType =
        first === "random" || first === "quote-of-the-day"
            ? { type: first }
            : { type: Number(first) };

    try {
        const data = await getQuote(input);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        if (err.message.includes("not found"))
            return new Response(JSON.stringify({ error: "Quote not found"}), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
    }
};