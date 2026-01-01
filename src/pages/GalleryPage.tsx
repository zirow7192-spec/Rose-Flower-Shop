import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase, type GalleryItem } from '../lib/supabase';

export function GalleryPage() {
  const { language, t } = useLanguage();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('gallery_items')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        if (data) {
          setItems(data);
          setFilteredItems(data);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {t.gallery.title}
          </h1>
          <p className="text-xl md:text-2xl font-light">{t.gallery.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            {t.gallery.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeFilter === 'all'
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.gallery.filterAll}
            </button>
            <button
              onClick={() => handleFilter('weddings')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeFilter === 'weddings'
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.gallery.filterWeddings}
            </button>
            <button
              onClick={() => handleFilter('baptisms')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeFilter === 'baptisms'
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.gallery.filterBaptisms}
            </button>
            <button
              onClick={() => handleFilter('events')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeFilter === 'events'
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.gallery.filterEvents}
            </button>
            <button
              onClick={() => handleFilter('bouquets')}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeFilter === 'bouquets'
                  ? 'bg-rose-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.gallery.filterBouquets}
            </button>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-gray-600">{t.gallery.loading}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">{t.gallery.noItems}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={item.image_url}
                      alt={language === 'el' ? item.title_el : item.title_en}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <h3 className="text-white font-medium">
                        {language === 'el' ? item.title_el : item.title_en}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-auto">
            <img
              src={lightboxItem.image_url}
              alt={
                language === 'el' ? lightboxItem.title_el : lightboxItem.title_en
              }
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {language === 'el' ? lightboxItem.title_el : lightboxItem.title_en}
              </h3>
              {(lightboxItem.description_el || lightboxItem.description_en) && (
                <p className="text-gray-700">
                  {language === 'el'
                    ? lightboxItem.description_el
                    : lightboxItem.description_en}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
