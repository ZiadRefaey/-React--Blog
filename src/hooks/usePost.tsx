import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { formatDate } from "../utils/utils";

export default function usePost(id?: string) {
  return useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;

      const formattedData = {
        ...data,
        created_at: formatDate(data.created_at),
      };
      return formattedData;
    },
  });
}
