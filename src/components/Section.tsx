import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "section-height w-full flex items-center justify-center p-6",
        className
      )}
    >
      <div className="max-w-4xl w-full fade-in">{children}</div>
    </section>
  );
}