import { useInView } from "@/hooks/useInView";
import { MessageCircle, Search, Calendar, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Solicite orçamento",
    description: "Entre em contato pelo WhatsApp e descreva o problema do seu aparelho.",
  },
  {
    icon: Search,
    title: "Análise do serviço",
    description: "Verificamos se o conserto pode ser realizado no local ou no laboratório.",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Agendamos um horário exclusivo para o seu atendimento.",
  },
  {
    icon: Wrench,
    title: "Conserto garantido",
    description: "Consertamos no local ou buscamos/entregamos sem custo adicional.",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="como-funciona" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="section-highlight p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p
              className={`text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Processo simples e transparente do orçamento ao conserto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step number + Icon */}
                  <div className="relative mb-4">
                    <div className="step-indicator">
                      <step.icon size={20} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
