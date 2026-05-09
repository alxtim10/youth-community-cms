import { UseFormRegisterReturn } from "react-hook-form";

interface SelectOption {
  label: string;

  value: string;
}

interface SelectFieldProps {
  label: string;

  register: UseFormRegisterReturn;

  options: SelectOption[];

  placeholder?: string;
}

export default function SelectField({
  label,
  register,
  options,
  placeholder,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <select
        {...register}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}