import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";

export default function useCreateProfile() {
  return useMutation({
    mutationFn: async (profile: {
      fullName: string;
      email: string;
      id: string;
    }) => {
      const { data, error } = await supabase
        .from("profiles")
        .insert([
          { full_name: profile.fullName, email: profile.email, id: profile.id },
        ])
        .select();
      if (error) return error;
      return data;
    },
  });
}
