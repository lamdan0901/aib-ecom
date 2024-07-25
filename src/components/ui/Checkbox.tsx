"use client";

import { cn } from "@/config/utils";
import { useState, useEffect } from "react";

interface CheckboxProps {
  label?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  checked?: boolean;
}

const Checkbox = ({
  label,
  onChange,
  className,
  disabled = false,
  checked = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label
      className={cn(
        "flex items-center hover:cursor-pointer my-2 w-fit select-none",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={cn("custom-checkbox", !isChecked && "hover:opacity-60")}
        disabled={disabled}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
