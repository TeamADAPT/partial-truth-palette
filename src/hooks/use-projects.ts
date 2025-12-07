import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Project } from "@/lib/store";

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

      // Transform snake_case from DB to camelCase for App
      return (data || []).map((p: any) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        status: p.status,
        progress: p.progress || 0,
        dueDate: p.due_date ? new Date(p.due_date) : new Date(),
        team: p.team || [],
        category: p.category,
        priority: p.priority,
        createdDate: p.created_at ? new Date(p.created_at) : new Date(),
      })) as Project[];
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
          // user_id is handled by RLS on the backend
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
