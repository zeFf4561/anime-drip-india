import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are Epic Threadz AI assistant. You help users with:
            - Product recommendations based on their favorite anime
            - Order tracking and status updates
            - Size guidance for anime clothing (T-shirts, hoodies, jackets, sweatshirts)
            - Information about upcoming products
            
            IMPORTANT: When recommending products, you MUST format them as structured data using this EXACT format:
            
            [PRODUCTS]
            {"id":"1","name":"Solo Leveling Arise Tee","price":1299,"image":"/src/assets/solo-leveling-design.jpg"}
            {"id":"2","name":"Naruto Shadow Clone Tee","price":1199,"image":"/src/assets/naruto-silhouette.jpg"}
            [/PRODUCTS]
            
            Available products (use the EXACT id values):
            - id: "1", name: "Solo Leveling Arise Tee", price: 1299, image: "/src/assets/solo-leveling-design.jpg"
            - id: "2", name: "Naruto Shadow Clone Tee", price: 1199, image: "/src/assets/naruto-silhouette.jpg"
            - id: "3", name: "Demon Slayer Squad Tee", price: 1399, image: "/src/assets/demon-slayer-group.jpg"
            - id: "4", name: "One Piece Straw Hat Tee", price: 1249, image: "/src/assets/one-piece-product.jpg"
            - id: "5", name: "Attack on Titan Scout Tee", price: 1349, image: "/src/assets/naruto-silhouette.jpg"
            - id: "6", name: "My Hero Academia Plus Ultra Tee", price: 1199, image: "/src/assets/demon-slayer-group.jpg"
            - id: "7", name: "Jujutsu Kaisen Cursed Energy Tee", price: 1399, image: "/src/assets/solo-leveling-design.jpg"
            - id: "8", name: "Tokyo Revengers Gang Tee", price: 1249, image: "/src/assets/one-piece-product.jpg"
            - id: "9", name: "Chainsaw Man Devil Hunter Tee", price: 1399, image: "/src/assets/naruto-silhouette.jpg"
            - id: "10", name: "Spy x Family Mission Tee", price: 1199, image: "/src/assets/demon-slayer-group.jpg"
            - id: "11", name: "Fullmetal Alchemist Brotherhood Tee", price: 1349, image: "/src/assets/solo-leveling-design.jpg"
            - id: "12", name: "Hunter x Hunter Nen Ability Tee", price: 1299, image: "/src/assets/one-piece-product.jpg"
            - id: "13", name: "Naruto Akatsuki Hoodie", price: 2299, image: "/src/assets/naruto-silhouette.jpg"
            - id: "14", name: "One Piece Wanted Poster Hoodie", price: 2199, image: "/src/assets/one-piece-product.jpg"
            - id: "15", name: "Attack on Titan Wings of Freedom Hoodie", price: 2399, image: "/src/assets/demon-slayer-group.jpg"
            - id: "16", name: "Demon Slayer Hashira Sweatshirt", price: 1899, image: "/src/assets/demon-slayer-group.jpg"
            - id: "17", name: "Jujutsu Kaisen Domain Expansion Hoodie", price: 2499, image: "/src/assets/solo-leveling-design.jpg"
            - id: "18", name: "My Hero Academia UA Jacket", price: 2899, image: "/src/assets/naruto-silhouette.jpg"
            
            Be enthusiastic about anime and always maintain the brand voice: "Unleash the Dream!"
            Keep text responses concise. Always show products as structured data when recommending items.
            When users ask about specific anime, recommend 2-4 products from that series.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});