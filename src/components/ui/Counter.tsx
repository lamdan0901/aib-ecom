"use client";

import { useState } from "react";
import { cn } from "@/config/utils";
import InputNumber from "@/components/ui/InputNumber";

interface CounterProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  onChangeCount?: (count: number) => void;
}

const Counter = ({
  defaultValue = 0,
  onChangeCount = () => {},
  min = -Infinity,
  max = Infinity,
}: CounterProps) => {
  const [count, setCount] = useState<number>(defaultValue);

  const handleIncrement = () => {
    if (count < max) {
      const newCount = count + 1;
      handleChange(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      const newCount = count - 1;
      handleChange(newCount);
    }
  };

  const handleChange = (value: number) => {
    if (value >= min && value <= max) {
      setCount(value);
      onChangeCount(value);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <ButtonCounter onClick={handleDecrement} isDisabled={count <= min} />
        <InputNumber
          className="border border-white-400 border-r-0 border-l-0 text-center h-7 w-12 outline-none"
          value={count}
          onChange={handleChange}
          isSpinButton={false}
          min={min}
          max={max}
        />
        <ButtonCounter
          isIncreaseButton
          onClick={handleIncrement}
          isDisabled={count >= max}
        />
      </div>
    </div>
  );
};

export default Counter;

interface ButtonCounterProps {
  onClick: () => void;
  isDisabled?: boolean;
  isIncreaseButton?: boolean;
}

const ButtonCounter = ({
  onClick,
  isIncreaseButton,
  isDisabled,
}: ButtonCounterProps) => {
  return (
    <button
      className={cn(
        `cursor-pointer border 
       border-white-400 hover:border-gray h-7 w-8 text-center 
        ${isIncreaseButton ? "rounded-r-sm" : "rounded-l-sm"}`,
        {
          "text-white-400": isDisabled,
        }
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isIncreaseButton ? "+" : "-"}
    </button>
  );
};
