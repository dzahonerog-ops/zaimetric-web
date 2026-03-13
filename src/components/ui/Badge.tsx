import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "orange" | "gray" | "dark";
  className?: string;
}

const variants = {
  blue: "bg-blue-100 text-blue-700 border border-blue-200",
  orange: "bg-orange-100 text-orange-700 border border-orange-200",
  gray: "bg-slate-100 text-slate-600 border border-slate-200",
  dark: "bg-slate-900 text-white border border-slate-700",
};

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-grotesk tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
