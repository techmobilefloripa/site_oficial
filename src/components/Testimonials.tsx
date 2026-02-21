import { useInView } from "@/hooks/useInView";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Victor Bentos",
    text: "Veio até minha casa e resolveu o problema na hora. Honestidade e profissionalismo — recomendo.",
    rating: 5,
  },
  {
    name: "Abigail Vaccaro",
    text: "Excelente profissional. Levou nossos aparelhos e realizou o serviço no mesmo dia.",
    rating: 5,
  },
  {
    name: "Paulo Bossle",
    text: "Atendimento excelente na minha loja. Serviço rápido e de qualidade.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "star fill-current" : "text-muted"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="depoimentos" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            O que dizem nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Avaliações reais de clientes satisfeitos
          </p>
        </div>

        {/* Google Review CTA */}
        <div
          className={`glass-card rounded-2xl p-8 max-w-md mx-auto mb-12 text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Já utilizou nossos serviços?
            <br />
            <strong className="text-foreground">
              Avalie a Tech Mobile Floripa no Google
            </strong>
          </p>

          <img
            src="https://github.com/techmobilesolucoes/Home/blob/main/qrcodenovo.png?raw=true"
            alt="QR Code para avaliação no Google"
            className="w-36 h-36 mx-auto mb-4 rounded-lg"
            loading="lazy"
          />

          <a
            href="https://g.page/r/CZoqMBJTj472EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Star size={18} className="fill-current" />
            Avaliar no Google
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <StarRating rating={testimonial.rating} />

              <blockquote className="mt-4 mb-4 text-foreground leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
