import { useMutation } from "@tanstack/react-query";
import type { IPost } from "./useCreatePost";
import { supabase } from "../supabaseClient";
import { queryClient } from "../main";

type EditPostInput = IPost & {
  id: string;
};

export default function useEditPost() {
  return useMutation({
    mutationFn: async ({ id, content, image_url, title }: EditPostInput) => {
      const { data, error } = await supabase
        .from("posts")
        .update({ content, title, image_url })
        .eq("id", id)
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: async (_data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["posts"],
        refetchType: "all",
      });
      await queryClient.invalidateQueries({ queryKey: ["post", variables.id] });
    },
  });
}
