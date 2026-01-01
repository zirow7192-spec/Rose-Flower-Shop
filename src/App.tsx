import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WeddingsPage } from './pages/WeddingsPage';
import { BaptismsPage } from './pages/BaptismsPage';
import { EventsPage } from './pages/EventsPage';
import { ProductsPage } from './pages/ProductsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'services/weddings':
        return <WeddingsPage />;
      case 'services/baptisms':
        return <BaptismsPage />;
      case 'services/events':
        return <EventsPage />;
      case 'products':
        return <ProductsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">{renderPage()}</main>
        <Footer onNavigate={setCurrentPage} />
        <FloatingContactButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
