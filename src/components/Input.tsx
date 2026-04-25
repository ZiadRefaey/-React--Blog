import React from "react";
interface IProps {
  name: string;
  label: string;
  icon: React.ReactElement;
  type: string;
  placeholder: string;
}
export default function Input({
  name,
  label,
  icon,
  type = "text",
  placeholder,
}: IProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-mute-secondary font-bold">
        {label}
      </label>
      <div className="flex items-start justify-center bg-input py-3 px-2 rounded-xl w-full mt-2">
        {icon}
        <input
          name={name}
          type={type}
          className="outline-none ml-2 w-full bg-input"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
