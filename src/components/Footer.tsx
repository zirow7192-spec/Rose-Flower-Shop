import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">R</span>
              </div>
              <div>
                <div className="text-lg font-serif font-bold text-white">ROSE</div>
                <div className="text-xs">Flower Shop</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services/weddings')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.weddings}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services/baptisms')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.baptisms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services/events')}
                  className="text-sm hover:text-white transition"
                >
                  {t.nav.events}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.home.contactTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+306970431472"
                  className="flex items-center space-x-2 text-sm hover:text-white transition group"
                >
                  <Phone className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
                  <span>697 043 1472</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:annantakaki9@gmail.com"
                  className="flex items-center space-x-2 text-sm hover:text-white transition group"
                >
                  <Mail className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
                  <span>annantakaki9@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/roseanhoupoleiorehumno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-white transition group"
                >
                  <MessageCircle className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
                  <span>Messenger</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <span>{t.home.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rose Flower Shop. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
