"use client";

import { useState } from "react";
import { cn } from "@/config/utils";
import Button from "@/components/ui/Button";

type SelectorColorProps = {
  title: string;
  defaultValue: string;
  colors: string[];
  onChangeColor?: (color: string) => void;
};

const SelectorColor = ({
  title,
  defaultValue,
  colors,
  onChangeColor,
}: SelectorColorProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
    onChangeColor?.(color);
  };

  return (
    <>
      <p className="mb-2">{title}</p>
      <div className="flex">
        {colors.map((color, index) => (
          <Button
            key={index}
            className={cn(
              "w-5 h-5 mr-2 rounded-full cursor-pointer",
              selectedColor === color
                ? "outline outline-offset-2 outline-1"
                : ""
            )}
            style={{ backgroundColor: color, outlineColor: color }}
            onClick={() => handleSelectedColor(color)}
          />
        ))}
      </div>
    </>
  );
};

export default SelectorColor;
