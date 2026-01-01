import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase, type GalleryItem } from '../lib/supabase';

export function ProductsPage() {
  const { language, t } = useLanguage();
  const [products, setProducts] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('gallery_items')
          .select('*')
          .eq('category', 'bouquets')
          .order('display_order', { ascending: true });

        if (error) throw error;
        if (data) setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1421890/pexels-photo-1421890.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {t.products.title}
          </h1>
          <p className="text-xl md:text-2xl font-light">{t.products.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            {t.products.intro}
          </p>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              {t.products.orderTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.products.orderStep1}
                </h3>
                <p className="text-gray-700">{t.products.orderStep1Desc}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.products.orderStep2}
                </h3>
                <p className="text-gray-700">{t.products.orderStep2Desc}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t.products.orderStep3}
                </h3>
                <p className="text-gray-700">{t.products.orderStep3Desc}</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="tel:+306970431472"
                className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>{t.products.callToOrder}</span>
              </a>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600">{t.common.loading}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                {t.gallery.noItems}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-md mb-4">
                    <img
                      src={product.image_url}
                      alt={language === 'el' ? product.title_el : product.title_en}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {language === 'el' ? product.title_el : product.title_en}
                  </h3>
                  {(product.description_el || product.description_en) && (
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'el'
                        ? product.description_el
                        : product.description_en}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
