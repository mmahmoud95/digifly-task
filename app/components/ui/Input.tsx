import React from "react";

interface Props {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  htmlFor,
  label,
  type,
  id,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="flex w-full flex-grow flex-col gap-4">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={label}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={`rounded-sm border px-6 py-4 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />{" "}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
