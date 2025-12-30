import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type SkillInput } from "@shared/routes";

export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.skills.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateSkill() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: SkillInput) => {
      const res = await fetch(api.skills.create.path, {
        method: api.skills.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        if (res.status === 400) {
           const error = api.skills.create.responses[400].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error("Failed to create skill");
      }
      return api.skills.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.skills.list.path] });
    },
  });
}
