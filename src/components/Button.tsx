import { cn } from "../utils/className";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export function Button({
  type = "button",
  size = "md",
  variant = "primary",
  className,
  children,
  href,
  ...props
}: Props) {
  const sizeClasses = {
    sm: "rounded-sm text-sm px-4 py-1.5 gap-2",
    md: "rounded-md text-base px-6 py-2.5 gap-2",
    lg: "rounded-lg text-lg px-8 py-3.5 gap-4",
  };

  const variantClasses = {
    primary: "bg-primary text-black hover:bg-primary-emphasis",
    secondary: "bg-secondary text-white hover:bg-secondary-emphasis",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white/5",
  };

  const classes = cn(
    "inline-flex items-center justify-center",
    "font-semibold cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
