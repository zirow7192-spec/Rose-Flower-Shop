/*
  # Rose Flower Shop Database Schema

  ## Overview
  Database structure for a bilingual flower shop website managing gallery, testimonials, and contact forms.

  ## New Tables
  
  1. `gallery_items`
     - `id` (uuid, primary key)
     - `title_el` (text) - Greek title
     - `title_en` (text) - English title
     - `description_el` (text) - Greek description
     - `description_en` (text) - English description
     - `image_url` (text) - Image URL
     - `category` (text) - Category: weddings, baptisms, events, bouquets
     - `featured` (boolean) - Show on homepage
     - `display_order` (integer) - Sorting order
     - `created_at` (timestamptz)
     
  2. `testimonials`
     - `id` (uuid, primary key)
     - `name` (text) - Customer name
     - `text_el` (text) - Greek testimonial
     - `text_en` (text) - English testimonial
     - `rating` (integer) - 1-5 stars
     - `is_active` (boolean) - Display on site
     - `created_at` (timestamptz)
     
  3. `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `phone` (text)
     - `message` (text)
     - `language` (text) - Language used for submission
     - `created_at` (timestamptz)
     
  4. `service_inquiries`
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `phone` (text)
     - `service_type` (text) - weddings, baptisms, events
     - `event_date` (date)
     - `budget` (text)
     - `description` (text)
     - `language` (text)
     - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for gallery_items and testimonials (active only)
  - Authenticated insert for contact forms (will use service role for public submissions)
  - Admin-only access for managing content
*/

-- Gallery Items Table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_el text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  description_el text DEFAULT '',
  description_en text DEFAULT '',
  image_url text NOT NULL,
  category text NOT NULL CHECK (category IN ('weddings', 'baptisms', 'events', 'bouquets')),
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  text_el text NOT NULL,
  text_en text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  language text DEFAULT 'el' CHECK (language IN ('el', 'en')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Service Inquiries Table
CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_type text NOT NULL CHECK (service_type IN ('weddings', 'baptisms', 'events')),
  event_date date,
  budget text DEFAULT '',
  description text NOT NULL,
  language text DEFAULT 'el' CHECK (language IN ('el', 'en')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit service inquiries"
  ON service_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON gallery_items(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_gallery_order ON gallery_items(display_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON service_inquiries(created_at DESC);