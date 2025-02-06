
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { ArrowDown, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState("product");

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const tabContent = document.querySelector('[data-state="active"]');
    if (tabContent) {
      const section = tabContent.children[index] as HTMLElement;
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const tabContent = document.querySelector('[data-state="active"]');
      if (tabContent) {
        const sections = Array.from(tabContent.children);
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const section = Math.round(scrollPosition / windowHeight);
        setActiveSection(Math.min(section, sections.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <ThemeToggle />
        <div className="flex gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <Tabs
        defaultValue="product"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="product" className="mt-0">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Why Choose Us
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe in creating beautiful, functional experiences that help
                people achieve their goals.
              </p>
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="company" className="mt-0">
          <Section className="gradient-bg">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Building the future of digital experiences
              </p>
            </div>
          </Section>

          <Section>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Our Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {["Design", "Development", "Support"].map((team) => (
                  <div
                    key={team}
                    className="p-6 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{team} Team</h3>
                    <p className="text-muted-foreground">
                      Experts in their field with years of experience.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section className="gradient-bg">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Vision</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Creating innovative solutions that shape the future of technology.
              </p>
            </div>
          </Section>
        </TabsContent>

        <TabsContent value="contact" className="mt-0">
          <Section className="gradient-bg">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We'd love to hear from you
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 text-lg hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-lg hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </Section>

          <Section>
            <div className="max-w-md mx-auto w-full space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Contact Form
              </h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </Section>

          <Section className="gradient-bg">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Visit Our Office
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                123 Innovation Street
                <br />
                Tech City, TC 12345
              </p>
            </div>
          </Section>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
