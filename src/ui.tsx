import React from "react";

export function Button({
  className = "",
  variant,
  children,
  ...props
}: {
  className?: string;
  variant?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium transition focus:outline-none";
  const variantClass =
    variant === "outline"
      ? "border bg-transparent"
      : "border border-transparent";

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
