import { useInView } from "@/hooks/useInView";
import { Smartphone, Cpu, Laptop } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    badge: "Serviços rápidos",
    title: "Celulares Android e iPhone",
    description:
      "Troca de tela, troca de bateria, troca de conector de carga, troca de vidro traseiro e serviços de software.",
    image:
      "https://github.com/techmobilesolucoes/Home/blob/main/telaquebrada.jpg?raw=true",
  },
  {
    icon: Cpu,
    badge: "Reparo avançado",
    title: "Reparo em placa (celulares)",
    description:
      "Especialistas em reparos relacionados à placa lógica de aparelhos Android e iPhone.",
    image:
      "https://github.com/techmobilesolucoes/Home/blob/main/consertoplacacelular.jpg?raw=true",
  },
  {
    icon: Laptop,
    badge: "Serviços para notebooks",
    title: "Notebook e MacBook",
    description:
      "Reparos avançados em placas, upgrades de SSD/memória, troca de teclado e manutenção geral.",
    image:
      "https://github.com/techmobilesolucoes/Home/blob/main/notebook%20conserto%20placa.jpg?raw=true",
  },
];

export function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="servicos" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Soluções completas para celulares, tablets, notebooks e MacBooks com
            garantia e qualidade profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`glass-card rounded-2xl overflow-hidden group cursor-default transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="badge-primary mb-3 block w-fit">
                  {service.badge}
                </span>

                <div className="flex items-start gap-3 mb-3">
                  <service.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
