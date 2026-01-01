import { Heart, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl font-light">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.about.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1070882/pexels-photo-1070882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Anna at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                {t.about.story}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.about.storyText}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                {t.about.philosophy}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.about.philosophyText}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {t.about.values}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.about.value1}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.value1Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.about.value2}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.value2Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.about.value3}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.value3Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.about.value4}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.value4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
            "{t.about.ctaText}"
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl group"
          >
            <span>{t.about.contactButton}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
