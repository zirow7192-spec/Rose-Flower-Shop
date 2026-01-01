import { useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase, type GalleryItem, type Testimonial } from '../lib/supabase';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { language, t } = useLanguage();
  const [featuredItems, setFeaturedItems] = useState<GalleryItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [galleryResult, testimonialsResult] = await Promise.all([
          supabase
            .from('gallery_items')
            .select('*')
            .eq('featured', true)
            .order('display_order', { ascending: true })
            .limit(6),
          supabase
            .from('testimonials')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false })
            .limit(3),
        ]);

        if (galleryResult.data) setFeaturedItems(galleryResult.data);
        if (testimonialsResult.data) setTestimonials(testimonialsResult.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {t.home.heroSubtitle}
            </p>
            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
              {t.home.heroDescription}
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl group"
            >
              <span>{t.home.heroButton}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {t.home.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600">{t.home.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer" onClick={() => onNavigate('services/weddings')}>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wedding decoration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition">
                {t.home.weddingsTitle}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.home.weddingsDesc}
              </p>
              <button className="text-rose-600 font-medium inline-flex items-center space-x-2 group-hover:space-x-3 transition-all">
                <span>{t.home.viewServices}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group cursor-pointer" onClick={() => onNavigate('services/baptisms')}>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1666069/pexels-photo-1666069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Baptism decoration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition">
                {t.home.baptismsTitle}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.home.baptismsDesc}
              </p>
              <button className="text-rose-600 font-medium inline-flex items-center space-x-2 group-hover:space-x-3 transition-all">
                <span>{t.home.viewServices}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group cursor-pointer" onClick={() => onNavigate('services/events')}>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Event decoration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition">
                {t.home.eventsTitle}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.home.eventsDesc}
              </p>
              <button className="text-rose-600 font-medium inline-flex items-center space-x-2 group-hover:space-x-3 transition-all">
                <span>{t.home.viewServices}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {featuredItems.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {t.home.featuredTitle}
              </h2>
              <p className="text-xl text-gray-600">{t.home.featuredSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => onNavigate('products')}
                >
                  <div className="relative h-72 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={item.image_url}
                      alt={language === 'el' ? item.title_el : item.title_en}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900 group-hover:text-rose-600 transition">
                    {language === 'el' ? item.title_el : item.title_en}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium transition border-2 border-gray-200 hover:border-rose-300"
              >
                <span>{t.home.viewGallery}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {t.home.testimonialsTitle}
              </h2>
              <p className="text-xl text-gray-600">{t.home.testimonialsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{language === 'el' ? testimonial.text_el : testimonial.text_en}"
                  </p>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            {t.home.contactTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12">{t.home.contactSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+306970431472"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-200 transition">
                <Phone className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.phone}</h3>
              <p className="text-gray-600">697 043 1472</p>
            </a>

            <a
              href="mailto:annantakaki9@gmail.com"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-200 transition">
                <Mail className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.email}</h3>
              <p className="text-gray-600 text-sm">annantakaki9@gmail.com</p>
            </a>

            <a
              href="https://m.me/roseanhoupoleiorehumno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-200 transition">
                <MessageCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.home.messenger}</h3>
              <p className="text-gray-600">Facebook</p>
            </a>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <span>{t.home.contactButton}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
