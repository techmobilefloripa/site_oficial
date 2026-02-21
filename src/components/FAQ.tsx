import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para consertar meu celular em casa?",
    answer:
      "Muitos consertos simples são realizados em menos de 1 hora. Para serviços mais complexos, informamos o prazo após o diagnóstico inicial.",
  },
  {
    question: "Qual o custo da visita técnica?",
    answer:
      "A visita técnica para diagnóstico é gratuita caso você opte por realizar o conserto conosco.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Aceitamos Pix, cartão de crédito em até 10x sem juros, cartão de débito e dinheiro.",
  },
  {
    question: "Vocês atendem apenas a domicílio?",
    answer:
      "Não. Além do atendimento a domicílio, realizamos consertos em nosso laboratório localizado em Florianópolis.",
  },
  {
    question: "Qual é a garantia do serviço?",
    answer:
      "A garantia varia conforme o tipo de serviço e o aparelho, podendo ir de 3 meses a 1 ano.",
  },
  {
    question: "Quanto tempo leva um conserto em garantia?",
    answer:
      "Normalmente realizamos o conserto em garantia em até 24 horas após a solicitação.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="faq" className="py-20 lg:py-28" ref={ref}>
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p
            className={`text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`space-y-3 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
