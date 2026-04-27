import React from "react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
interface IProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  icon: React.ReactElement;
  type: string;
  placeholder: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  error?: string;
}
export default function Input<T extends FieldValues>({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  register,
  validation,
  error,
}: IProps<T>) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-mute-secondary font-bold">
        {label}
      </label>
      <div className="flex items-start justify-center bg-input py-3 px-2 rounded-xl w-full mt-2">
        {icon}
        <input
          {...register(name, validation)}
          id={name}
          type={type}
          className="outline-none ml-2 w-full bg-input"
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-400 mt-1 text-sm">{error}</p>}
    </div>
  );
}
