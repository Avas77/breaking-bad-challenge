import React from "react";

interface IInputProps {
  label: string;
}

const Input = ({ label }: IInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label.toLowerCase()} className="font-semibold">
        {label}
      </label>
      <input className="bg-gray p-1 rounded text-black" />
    </div>
  );
};

export default Input;
