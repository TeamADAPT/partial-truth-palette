import { supabase } from "@/integrations/supabase/client";
import { AgentResponse } from "./types";

export const localAgent = async (message: string): Promise<AgentResponse> => {
  const lowerMsg = message.toLowerCase();

  // Artificial delay to simulate "thinking"
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    // Intent: Create Project
    if (lowerMsg.includes("create project") || lowerMsg.includes("new project")) {
      // Extract name using regex
      const nameMatch = message.match(/(?:project|named|called)\s+(?:["'])([^"']+)(?:["'])|(?:\s+)([^"'\s]+)$/i);
      // Fallback name if regex fails but intent is clear
      const name = nameMatch ? (nameMatch[1] || nameMatch[2]) : "New AI Project";

      const { data, error } = await supabase
        .from("projects")
        .insert([{
          name: name,
          description: "Created via AI Agent (Local)",
          status: "planning",
          priority: "medium",
          team: [],
          category: "Development"
        }])
        .select()
        .single();

      if (error) throw error;

      return {
        message: `I've created the project "${name}" for you.`,
        toolCalls: [{
          id: Date.now().toString(),
          name: "create_project",
          args: { name },
          result: data
        }]
      };
    }

    // Intent: List Projects
    if (lowerMsg.includes("list") || lowerMsg.includes("show") || lowerMsg.includes("my projects")) {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) throw error;

      if (!data || data.length === 0) {
        return { message: "You don't have any projects yet." };
      }

      const projectList = data.map(p => `• ${p.name} (${p.status})`).join("\n");
      return {
        message: `Here are your recent projects:\n${projectList}`
      };
    }

    // Intent: Help/Default
    return {
      message: "I can help you manage your business. Try saying 'Create project \"Marketing Campaign\"' or 'List my projects'."
    };

  } catch (error: unknown) {
    console.error("Local Agent Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      message: `I encountered an error: ${errorMessage}`
    };
  }
};
