import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { formatDate } from "../utils/utils";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) throw error;
      const formattedData = data.map((entry) => ({
        ...entry,
        created_at: formatDate(entry.created_at),
      }));
      return formattedData;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}
