import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { queryClient } from "../main";

export default function useCreateComment() {
  return useMutation({
    mutationFn: async (comment: {
      user_id: string | undefined;
      post_id: number | undefined;
      content: string;
    }) => {
      const { data, error } = await supabase
        .from("comments")
        .insert([comment])
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: (_data, comment) =>
      queryClient.invalidateQueries({
        queryKey: ["comments", comment.post_id],
      }),
  });
}
