import { useInView } from "@/hooks/useInView";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="contato" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="section-highlight p-8 lg:p-16 text-center">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Fale <span className="gradient-text">Conosco</span>
          </h2>

          <p
            className={`text-muted-foreground max-w-xl mx-auto mb-10 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Entre em contato para solicitar um orçamento gratuito ou tirar suas
            dúvidas. Atendemos Florianópolis e região.
          </p>

          {/* Contact info */}
          <div
            className={`flex flex-wrap justify-center gap-6 lg:gap-10 mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="tel:+5548998049084"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Phone size={20} className="text-primary" />
              </div>
              <span className="font-semibold">(48) 99804-9084</span>
            </a>

            <a
              href="mailto:techmobilefloripa@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="font-semibold">techmobilefloripa@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin size={20} className="text-primary" />
              </div>
              <span>São José - SC</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5548998049084?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20preciso%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-whatsapp inline-flex transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <MessageCircle size={24} />
            Abrir conversa no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
