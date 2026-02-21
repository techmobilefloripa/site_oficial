import { useInView } from "@/hooks/useInView";
import { Shield, Clock, Award, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia",
    description: "De 3 meses a 1 ano em todos os serviços",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Muitos consertos em menos de 1 hora",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Técnicos especializados e peças originais",
  },
  {
    icon: MapPin,
    title: "Conveniência",
    description: "Atendimento a domicílio em toda Florianópolis",
  },
];

export function About() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="quem-somos" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <h2
              className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Quem <span className="gradient-text">Somos</span>
            </h2>

            <div
              className={`space-y-4 text-muted-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                A <strong className="text-foreground">Tech Mobile Floripa</strong> é
                uma assistência técnica especializada que oferece soluções seguras e
                eficientes em consertos de celulares, notebooks e computadores de
                todas as marcas.
              </p>
              <p>
                Atendemos a domicílio e em laboratório, com transparência e alto
                padrão de atendimento. Nossa missão é resolver seu problema da
                forma mais rápida e conveniente possível.
              </p>
            </div>

            {/* Features */}
            <div
              className={`grid grid-cols-2 gap-4 mt-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal notice */}
          <div
            className={`glass-card rounded-2xl p-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Aviso Legal
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Tech Mobile Floripa é uma empresa independente e especializada em
              diagnóstico e reparo de aparelhos Android, iOS, macOS e Windows. Não
              possuímos vínculo, afiliação ou representação oficial com fabricantes
              citados; nomes e logotipos são de seus respectivos proprietários e são
              usados apenas para identificação dos aparelhos atendidos. Os serviços
              são prestados por técnicos qualificados em laboratórios independentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
