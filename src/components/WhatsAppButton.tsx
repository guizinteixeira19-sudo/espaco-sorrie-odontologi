import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519953214847"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 animate-bounce hover:animate-none transform hover:scale-110 group"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
        1
      </span>
    </a>
  );
}
