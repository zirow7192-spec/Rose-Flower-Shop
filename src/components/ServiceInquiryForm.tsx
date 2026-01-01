import { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase, type ServiceInquiry } from '../lib/supabase';

interface ServiceInquiryFormProps {
  serviceType: 'weddings' | 'baptisms' | 'events';
}

export function ServiceInquiryForm({ serviceType }: ServiceInquiryFormProps) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    budget: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const inquiry: ServiceInquiry = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: serviceType,
        event_date: formData.eventDate,
        budget: formData.budget,
        description: formData.description,
        language: language,
      };

      const { error } = await supabase
        .from('service_inquiries')
        .insert([inquiry]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        budget: '',
        description: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t.services.inquiry.successTitle}
        </h3>
        <p className="text-gray-700">{t.services.inquiry.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
        {t.services.inquiry.title}
      </h3>

      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-900">
              {t.services.inquiry.errorTitle}
            </h4>
            <p className="text-sm text-red-700">{t.services.inquiry.errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.services.inquiry.name} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.services.inquiry.namePlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.services.inquiry.email} *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.services.inquiry.emailPlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.services.inquiry.phone}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t.services.inquiry.phonePlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.services.inquiry.eventDate}
          </label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.services.inquiry.budget}
        </label>
        <input
          type="text"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          placeholder={t.services.inquiry.budgetPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.services.inquiry.description} *
        </label>
        <textarea
          required
          rows={6}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder={t.services.inquiry.descriptionPlaceholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-4 rounded-lg font-medium transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        <span>
          {status === 'submitting'
            ? t.services.inquiry.submitting
            : t.services.inquiry.submit}
        </span>
      </button>
    </form>
  );
}
