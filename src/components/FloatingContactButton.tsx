import { Phone } from 'lucide-react';

export function FloatingContactButton() {
  return (
    <a
      href="tel:+306970431472"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-rose-600 text-white rounded-full shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all flex items-center justify-center group md:hidden"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
}
