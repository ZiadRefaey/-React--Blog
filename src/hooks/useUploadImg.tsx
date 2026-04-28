import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";

export default function useUploadImg() {
  return useMutation({
    mutationFn: async (file: File) => {
      //using date to avoid any duplicate files
      const filePath = `${Date.now()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("post_images")
        .upload(filePath, file);

      if (error) {
        console.error(error);
        throw error;
      }

      return data;
    },
  });
}
