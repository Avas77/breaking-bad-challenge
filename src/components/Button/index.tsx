import React from "react";

interface IButtonProps {
  label: string;
}

const Button = ({ label }: IButtonProps) => {
  return (
    <button className="bg-primary rounded-xl p-3 w-full mt-6 text-lg">
      {label}
    </button>
  );
};

export default Button;
