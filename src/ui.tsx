import React from "react";

export function Button({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition ${className}`}
      {...props}
    >
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
    <div
      className={`bg-white rounded-2xl shadow-md border hover:shadow-xl transition duration-300 ${className}`}
      {...props}
    >
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