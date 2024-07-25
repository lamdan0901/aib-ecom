import { forwardRef, ReactNode, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/config/utils";

const inputVariants = cva(
  "w-full py-3 text-dark-850 placeholder-dark-400 outline-none disabled:pointer-events-none disabled:cursor-none disabled:opacity-70",
  {
    variants: {
      variant: {
        outlined:
          "border px-3 rounded-[10px] focus-visible:border-primary border-dark-300 focus-outline:border-primary hover:border-primary",
        standard:
          "border-b-[1px] border-b-dark-300  py-2 focus:border-b-primary hover:border-b-primary focus-outline:border-b-primary ",
        filled: "px-3 shadow-md rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, icon, variant = "outlined", ...props }, ref) => {
    return (
      <div>
        {label && <label className="block mb-1">{label}</label>}
        <div className="w-full relative">
          <input
            className={cn(inputVariants({ variant, className }))}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "absolute right-3 top-[50%] translate-y-[-50%]",
              variant === "standard" && "right-0"
            )}
          >
            {icon}
          </div>
        </div>
        {error && <p className="text-red mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
