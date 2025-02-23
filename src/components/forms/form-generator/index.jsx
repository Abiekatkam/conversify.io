import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff } from "lucide-react"; // Import Eye Icons

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  register,
  type,
  form,
  label,
  lines,
  options,
  uniqueId,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(true);

    setTimeout(() => {
      setShowPassword(false);
    }, 3000);
  };

  switch (inputType) {
    case "input":
      return (
        <Label
          className="flex flex-col gap-2 relative"
          htmlFor={`input-${uniqueId}`}
        >
          {label && label}
          <div className="relative w-full">
            <Input
              id={`input-${uniqueId}`}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder}
              form={form}
              required
              {...register(name)}
              className="pr-10" // Padding for the icon
            />
            {type === "password" && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-500">
                {message?.toLowerCase() === "required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    case "select":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`select-${uniqueId}`}>
          {label && label}
          <select form={form} id={`select-${uniqueId}`} {...register(name)}>
            {options?.length &&
              options?.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-500">
                {message?.toLowerCase() === "required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`textarea-${uniqueId}`}>
          {label && label}
          <Textarea
            form={form}
            id={`textarea-${uniqueId}`}
            placeholder={placeholder}
            rows={lines}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-500">
                {message?.toLowerCase() === "required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );

    default:
      return <></>;
  }
};

export default FormGenerator;
