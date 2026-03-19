import { propertyIcons } from "@/data/dummy-data";
import { Building2 } from "lucide-react";

interface PropertyIconProps {
  type: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

const containerSizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

export function PropertyIcon({ type, className = "", size = "lg" }: PropertyIconProps) {
  const Icon = propertyIcons[type] || Building2;
  return (
    <div className={`${containerSizeMap[size]} rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={`${sizeMap[size]} text-primary`} />
    </div>
  );
}
