import {
  FieldError,
  FieldErrorsImpl,
  UseFormRegisterReturn,
  FieldValues,
} from "react-hook-form";

interface FormInputProps {
  label?: string;
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError | FieldErrorsImpl<FieldValues>;
}

export const FormInput = ({
  label,
  type,
  placeholder,
  register,
  error,
}: FormInputProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="rounded-md p-2 border"
      />
      <p>{(error?.message as string) || ""}</p>
    </div>
  );
};
