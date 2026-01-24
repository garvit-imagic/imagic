import { cn } from "@/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  animation?: "pulse" | "wave" | "none";
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className,
  variant = "rectangular",
  animation = "wave",
  width,
  height,
}: SkeletonProps) {
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "skeleton",
    none: "",
  };

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={cn(
        "bg-gray-200",
        variantClasses[variant],
        animationClasses[animation],
        className,
      )}
      style={style}
    />
  );
}
