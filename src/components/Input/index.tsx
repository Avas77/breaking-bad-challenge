interface IInputProps {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ label, value, onChange }: IInputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label.toLowerCase()} className="font-semibold">
        {label}
      </label>
      <input
        className="bg-gray p-1 rounded text-black"
        value={value}
        onChange={(event: any) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
