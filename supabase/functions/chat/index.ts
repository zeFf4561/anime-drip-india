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
            - Size guidance for anime T-shirts
            - Information about upcoming products
            
            IMPORTANT: When recommending products, you MUST format them as structured data using this EXACT format:
            
            [PRODUCTS]
            {"id":"naruto-silhouette","name":"Naruto Silhouette Tee","price":899,"image":"/src/assets/naruto-silhouette.jpg"}
            {"id":"solo-leveling-tee","name":"Solo Leveling Arise Tee","price":899,"image":"/src/assets/solo-leveling-art.png"}
            [/PRODUCTS]
            
            Available products:
            - id: "naruto-silhouette", name: "Naruto Silhouette Tee", price: 899, image: "/src/assets/naruto-silhouette.jpg"
            - id: "one-piece-wanted","name":"One Piece Wanted Poster Tee","price":899,"image":"/src/assets/one-piece-product.jpg"
            - id: "solo-leveling-tee","name":"Solo Leveling Arise Tee","price":899,"image":"/src/assets/solo-leveling-art.png"
            - id: "bleach-tee","name":"Bleach Ichigo Tee","price":899,"image":"/src/assets/bleach-banner.jpg"
            - id: "demon-slayer-tee","name":"Demon Slayer Squad Tee","price":899,"image":"/src/assets/demon-slayer-group.jpg"
            
            Be enthusiastic about anime and always maintain the brand voice: "Unleash the Dream!"
            Keep text responses concise. Always show products as structured data when recommending items.`
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