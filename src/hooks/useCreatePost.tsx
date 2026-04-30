import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { queryClient } from "../main";
export interface IPost {
  title: string;
  content: string;
  image_url: string;
  user_id?: string | undefined;
}
export default function useCreatePost() {
  return useMutation({
    mutationFn: async (postBody: IPost) => {
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
