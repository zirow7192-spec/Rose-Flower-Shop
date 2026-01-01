import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl font-bold">R</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-serif font-bold text-gray-900 group-hover:text-rose-600 transition">
                ROSE
              </div>
              <div className="text-xs text-gray-600">Flower Shop</div>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-medium transition ${
                currentPage === 'home'
                  ? 'text-rose-600'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-medium transition ${
                currentPage === 'about'
                  ? 'text-rose-600'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              {t.nav.about}
            </button>

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 text-sm font-medium transition ${
                  currentPage.startsWith('services')
                    ? 'text-rose-600'
                    : 'text-gray-700 hover:text-rose-600'
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => handleNavigate('services/weddings')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                  >
                    {t.nav.weddings}
                  </button>
                  <button
                    onClick={() => handleNavigate('services/baptisms')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                  >
                    {t.nav.baptisms}
                  </button>
                  <button
                    onClick={() => handleNavigate('services/events')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition"
                  >
                    {t.nav.events}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('products')}
              className={`text-sm font-medium transition ${
                currentPage === 'products'
                  ? 'text-rose-600'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => handleNavigate('gallery')}
              className={`text-sm font-medium transition ${
                currentPage === 'gallery'
                  ? 'text-rose-600'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-sm font-medium transition ${
                currentPage === 'contact'
                  ? 'text-rose-600'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-rose-300 hover:bg-rose-50 transition"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'el' ? 'ΕΛ' : 'EN'}
              </span>
            </button>

            <a
              href="tel:+306970431472"
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">697 043 1472</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-rose-600 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  currentPage === 'home'
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  currentPage === 'about'
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.about}
              </button>
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {t.nav.services}
                </div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => handleNavigate('services/weddings')}
                    className="block w-full text-left py-1 text-gray-700 hover:text-rose-600 transition"
                  >
                    {t.nav.weddings}
                  </button>
                  <button
                    onClick={() => handleNavigate('services/baptisms')}
                    className="block w-full text-left py-1 text-gray-700 hover:text-rose-600 transition"
                  >
                    {t.nav.baptisms}
                  </button>
                  <button
                    onClick={() => handleNavigate('services/events')}
                    className="block w-full text-left py-1 text-gray-700 hover:text-rose-600 transition"
                  >
                    {t.nav.events}
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleNavigate('products')}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  currentPage === 'products'
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => handleNavigate('gallery')}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  currentPage === 'gallery'
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  currentPage === 'contact'
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
