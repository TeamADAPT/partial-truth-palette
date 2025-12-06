import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Project } from "@/lib/store"; // Re-using type for now, will refine

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      // Map DB snake_case to app camelCase if needed, or update app to match DB.
      // For now, assuming direct mapping or partial match.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data as any[];
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (project: Omit<Project, "id" | "createdDate" | "progress">) => {
      const { data, error } = await supabase
        .from("projects")
        .insert([{
          name: project.name,
          description: project.description,
          status: project.status,
          due_date: project.dueDate.toISOString(),
          category: project.category,
          priority: project.priority,
          team: project.team,
          // user_id is handled by RLS usually, or added here
        }])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
