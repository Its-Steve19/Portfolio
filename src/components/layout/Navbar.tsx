import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Download } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#272730] shadow-xl" : "bg-transparent"}`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Steve <span className="text-emerald-500">Mbuvi</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              href="/documents/steve-kamau-mbuvi-cv.pdf"
              external
            >
              <Download className="w-4 h-4" /> CV Placeholder
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#18181f] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#121216] border-b border-[#272730] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-emerald-400 hover:bg-[#18181f]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-[#272730]">
            <Button
              variant="outline"
              size="md"
              href="/documents/steve-kamau-mbuvi-cv.pdf"
              external
              className="w-full justify-center"
            >
              <Download className="w-4 h-4" /> CV Placeholder
            </Button>
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="w-full justify-center"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
