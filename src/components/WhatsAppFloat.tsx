import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5548998049084?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20preciso%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float pulse-ring"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
}
