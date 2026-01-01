import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceInquiryForm } from '../components/ServiceInquiryForm';

export function WeddingsPage() {
  const { t } = useLanguage();
  const service = t.services.weddings;

  return (
    <div className="min-h-screen">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl font-light">{service.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-16">
            {service.intro}
          </p>

          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
            {service.servicesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.service1}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.service1Desc}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.service2}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.service2Desc}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.service3}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.service3Desc}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.service4}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.service4Desc}</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">
            {service.processTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.step1}</h3>
              <p className="text-sm text-gray-600">{service.step1Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.step2}</h3>
              <p className="text-sm text-gray-600">{service.step2Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.step3}</h3>
              <p className="text-sm text-gray-600">{service.step3Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.step4}</h3>
              <p className="text-sm text-gray-600">{service.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {service.ctaTitle}
            </h2>
            <p className="text-xl text-gray-600">{service.ctaText}</p>
          </div>

          <ServiceInquiryForm serviceType="weddings" />
        </div>
      </section>
    </div>
  );
}
