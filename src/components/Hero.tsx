import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const heroTexts = [
  {
    main: "Assistência técnica especializada",
    highlight: "para celulares Android, iOS, notebooks e MacBooks",
    location: "em Florianópolis e região",
  },
  {
    main: "Serviços rápidos:",
    highlight: "troca de tela, bateria, conector de carga",
    location: "realizados onde você estiver",
  },
  {
    main: "Notebooks e MacBooks:",
    highlight: "reparo em placa, upgrade de SSD, manutenção completa",
    location: "atendimento a domicílio e laboratório",
  },
  {
    main: "Profissionais capacitados,",
    highlight: "atendimento rápido e transparente",
    location: "resolva seu problema sem sair de casa",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentText = heroTexts[currentIndex];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, hsl(200 50% 4% / 0.6), hsl(200 50% 4% / 0.92)),
          url('https://github.com/techmobilesolucoes/Home/blob/main/laboratorio.jpg?raw=true') center/cover no-repeat
        `,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center py-24 lg:py-32">
        <div
          className={`max-w-4xl mx-auto transition-all duration-300 ${
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-foreground">{currentText.main}</span>{" "}
            <span className="gradient-text">{currentText.highlight}</span>{" "}
            <span className="text-foreground">{currentText.location}</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Diagnóstico gratuito, orçamento sem compromisso e garantia em todos os serviços.
            Atendemos a domicílio e em nosso laboratório.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5548998049084?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20preciso%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={24} />
              Solicitar orçamento gratuito
            </a>

            <a
              href="tel:+5548998049084"
              className="text-muted-foreground hover:text-foreground transition-colors font-semibold"
            >
              ou ligue: (48) 99804-9084
            </a>
          </div>
        </div>

        {/* Hero indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroTexts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
