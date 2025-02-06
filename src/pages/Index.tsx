import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.round(window.scrollY / window.innerHeight);
      setActiveSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <Section className="gradient-bg">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A minimalist design for maximum impact
          </p>
          <ArrowDown
            className="mx-auto animate-bounce cursor-pointer"
            onClick={() => scrollToSection(1)}
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Simple", "Fast", "Secure"].map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="gradient-bg">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">About Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in creating beautiful, functional experiences that help
            people achieve their goals.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Index;