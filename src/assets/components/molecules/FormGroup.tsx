import Input from "../atoms/Input";

interface FormGroupProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function FormGroup({
  label,
  placeholder,
  type = "text",
}: FormGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-white">{label}</label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
