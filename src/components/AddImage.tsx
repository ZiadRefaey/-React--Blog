import React, { useState } from "react";
import CameraIcon from "./CameraIcon";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
interface IAddImage<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  previewImageUrl?: string;
}
export default function AddImage<T extends FieldValues>({
  register,
  name,
  validation,
  previewImageUrl,
}: IAddImage<T>) {
  const [preview, setPreview] = useState<string | null>(null);
  const imageRegister = register(name, validation);
  const displayedPreview = preview ?? previewImageUrl;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  }

  return (
    <div className="w-full">
      <input
        {...imageRegister}
        id="featured-image"
        type="file"
        className="hidden"
        onChange={(e) => {
          imageRegister.onChange(e);
          handleChange(e);
        }}
      />

      <label
        htmlFor="featured-image"
        className="group relative flex min-h-55 w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.08),transparent_55%),linear-gradient(to_bottom,#071521,#091827)] p-6 transition hover:border-cyan-500/40"
      >
        {displayedPreview ? (
          <img
            src={displayedPreview}
            alt="Preview"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 backdrop-blur-sm">
              <CameraIcon />
            </div>

            <p className="text-lg font-medium text-slate-200">
              Add a featured image
            </p>

            <p className="mt-1 text-sm text-slate-400">
              High resolution recommended
            </p>
          </div>
        )}
      </label>
    </div>
  );
}
