import React from "react";

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <main
      className={`${className} w-full max-w-7xl mx-auto text-muted relative z-10`}
    >
      {children}
    </main>
  );
}
