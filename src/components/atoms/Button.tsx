import Link from "next/link";
import { Icon } from "./Icon";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-dim shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed",
  outline:
    "bg-surface-container-lowest text-primary hover:bg-primary-container shadow-sm",
  whatsapp: "bg-whatsapp text-white hover:opacity-90 shadow-lg",
  ghost:
    "bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary",
};

const sizeStyles: Record<string, string> = {
  md: "px-5 py-2.5 text-sm md:px-8 md:py-3 md:text-base",
  lg: "px-6 py-3 text-sm md:px-10 md:py-4 md:text-lg",
};

export function Button({
  children,
  href,
  icon,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-95";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {icon && <Icon name={icon} />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon && <Icon name={icon} />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
}
