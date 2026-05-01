import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { queryClient } from "../main";

export default function useDeletePost() {
  return useMutation({
    mutationFn: async (postId: number) => {
      const { error } = await supabase.from("posts").delete().eq("id", postId);
      if (error) throw error;
    },
    onSuccess: () => {
      //this ensures refetching the data after creating a new post
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
