import { cn } from "../utils/className";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  contactCta?: boolean;
  contactSubject?: string;
}

export function Button({
  type = "button",
  size = "md",
  variant = "primary",
  className,
  children,
  href,
  contactCta,
  contactSubject,
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
    "inline-flex items-center justify-center max-sm:w-full",
    "font-semibold cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        data-contact-cta={contactCta ? "true" : undefined}
        data-contact-subject={contactSubject}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      data-contact-cta={contactCta ? "true" : undefined}
      data-contact-subject={contactSubject}
      {...props}
    >
      {children}
    </button>
  );
}
