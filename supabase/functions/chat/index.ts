import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const apiKey = Deno.env.get("OPENAI_API_KEY");

    // Initialize Supabase Client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not set");
    }

    // 1. Call OpenAI (Simulated structure for this file)
    // In a real deployment, you would fetch('https://api.openai.com/v1/chat/completions'...)

    // 2. Parse Tool Calls (Simulated Logic)
    // If the LLM says "create_project", we execute it:

    let responseText = "I processed your request.";
    const toolCalls = [];

    // Simple keyword detection to simulate "Intelligence" for the demo code
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("create project")) {
      const nameMatch = message.match(/project (?:named|called)?\s*["']?([^"']+)["']?/i);
      const name = nameMatch ? nameMatch[1] : "New AI Project";

      const { data, error } = await supabase
        .from("projects")
        .insert([{
          name: name,
          description: "Created via AI Agent",
          status: "planning",
          priority: "medium"
        }])
        .select()
        .single();

      if (error) throw error;

      responseText = `I've created the project "${name}" for you.`;
      toolCalls.push({ name: "create_project", args: { name }, result: data });
    } else if (lowerMsg.includes("list projects")) {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .limit(5);

      if (error) throw error;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      responseText = `Here are your recent projects: ${data.map((p: any) => p.name).join(", ")}`;
    } else {
      responseText = "I can help you manage projects. Try saying 'Create project Alpha' or 'List projects'.";
    }

    return new Response(
      JSON.stringify({ message: responseText, toolCalls }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
