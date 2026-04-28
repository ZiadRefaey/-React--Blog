import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";

export default function useProfile(id?: string) {
  return useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      if (id) {
        const { data, error } = await supabase
          .from("Profiles")
          .select("*")
          .eq("id", id);
        if (error) return error;
        return data;
      } else {
        const { data, error } = await supabase.from("Profiles").select("*");
        if (error) return error;
        return data;
      }
    },
  });
}
