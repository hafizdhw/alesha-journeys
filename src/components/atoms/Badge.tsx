interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "bestseller";
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary-container text-on-primary-container",
  secondary:
    "bg-secondary-container text-on-secondary-container",
  bestseller:
    "bg-white/90 backdrop-blur-md text-primary",
};

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
