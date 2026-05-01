import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";

export default function useComments(postId: number | undefined) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("comments")
        .select(
          `
          *,
          user_id (*)
        `,
        )
        .eq("post_id", postId);

      if (error) throw error;
      return data;
    },
    enabled: postId !== undefined && !Number.isNaN(postId),
  });
}
