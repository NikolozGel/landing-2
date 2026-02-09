import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  disabled?: boolean;
};
export const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
  disabled,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-muted-foreground">
        {label}
      </Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        className="bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/40 backdrop-blur-sm"
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};
