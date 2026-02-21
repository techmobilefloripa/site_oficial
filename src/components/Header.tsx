import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navLinks[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://github.com/techmobilesolucoes/Home/blob/main/LOGOFINAL2CORSITE.jpg?raw=true"
            alt="Tech Mobile Floripa"
            className="h-14 lg:h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg
                ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
                hover:bg-secondary/50
              `}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-colors
                ${
                  activeSection === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
