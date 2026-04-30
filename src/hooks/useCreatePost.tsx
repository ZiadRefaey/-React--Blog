import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { queryClient } from "../main";

export default function useCreatePost() {
  return useMutation({
    mutationFn: async (postBody: {
      title: string;
      content: string;
      image_url: string;
    }) => {
      const { data, error } = await supabase
        .from("posts")
        .insert([postBody])
        .select();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      //this ensures refetching the data after creating a new post
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
