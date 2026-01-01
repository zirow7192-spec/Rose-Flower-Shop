import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GalleryItem {
  id: string;
  title_el: string;
  title_en: string;
  description_el: string;
  description_en: string;
  image_url: string;
  category: 'weddings' | 'baptisms' | 'events' | 'bouquets';
  featured: boolean;
  display_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text_el: string;
  text_en: string;
  rating: number;
  is_active: boolean;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  language: 'el' | 'en';
}

export interface ServiceInquiry {
  name: string;
  email: string;
  phone?: string;
  service_type: 'weddings' | 'baptisms' | 'events';
  event_date?: string;
  budget?: string;
  description: string;
  language: 'el' | 'en';
}
