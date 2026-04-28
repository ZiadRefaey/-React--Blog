import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { formatDate } from "../utils/utils";

export default function usePost(id?: string) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      if (id) {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id);
        if (error) throw error;
        return data;
      }
      const { data, error } = await supabase.from("posts").select("*");
      if (error) throw error;
      const formattedData = data.map((entry) => ({
        ...entry,
        created_at: formatDate(entry.created_at),
      }));
      return formattedData;
    },
  });
}
