"use client";

import { useEffect, useState } from "react";
import { cn } from "@/config/utils";

interface SelectorItemProps {
  label: string;
  value: BaseValueInputType;
}

interface SelectorProps<T extends BaseValueType> {
  options: SelectorItemProps[];
  value?: T;
  onChange?: (selectedValue: T, selectedItem: SelectorItemProps) => void;
}

const Selector = <T extends BaseValueType>({
  options,
  value,
  onChange,
}: SelectorProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<BaseValueType>(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleClick = (item: SelectorItemProps) => {
    onChange?.(item.value as T, item);
    setSelectedValue(item.value);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options?.map((item, index) => (
        <div
          key={index}
          className={cn(
            "cursor-pointer px-4 py-1 border rounded-sm select-none",
            item.value === selectedValue
              ? "border-primary text-primary"
              : "hover:border-primary border-white-400"
          )}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Selector;
