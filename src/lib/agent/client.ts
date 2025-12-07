import { supabase } from "@/integrations/supabase/client";
import { localAgent } from "./local-agent";
import { AgentResponse } from "./types";

export const agentClient = {
  chat: async (message: string): Promise<AgentResponse> => {
    try {
      // 1. Try to invoke the Edge Function
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { message },
      });

      if (error) {
        // 2. If Function fails (not deployed/404), fall back to Local Agent
        console.warn("Edge Function unreachable, falling back to Local Agent", error);
        return await localAgent(message);
      }

      return data as AgentResponse;
    } catch (err) {
      // 3. Catch network errors
      return await localAgent(message);
    }
  }
};
