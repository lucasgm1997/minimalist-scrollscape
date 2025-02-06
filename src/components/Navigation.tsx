
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const sections = ["Section 1", "Section 2", "Section 3"];

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => onNavigate(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeSection === index
                ? "bg-primary scale-125"
                : "bg-muted hover:scale-110"
            )}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
}
