import type { ButtonProps } from "@/types";
import { cn } from "@/utils";

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-primary text-black hover:bg-primary-dark shadow-sm",
    secondary: "bg-dark text-white hover:bg-dark-light",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabledStyles,
        className
      )}
    >
      {children}
    </button>
  );
}
