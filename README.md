# Rose Flower Shop - Bilingual Website

A modern, fully-responsive bilingual website for Rose Flower Shop in Rethymno, Crete.

## Features

### Core Functionality
- **Bilingual Support**: Complete Greek and English translations with easy language switching
- **Mobile-First Design**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Built with modern React and optimized for speed
- **SEO Optimized**: Proper meta tags and structure for search engines

### Pages
1. **Home**: Hero section, services overview, featured bouquets, testimonials, contact CTA
2. **About Anna**: Personal story, philosophy, values showcase
3. **Services**: Detailed pages for Weddings, Baptisms, and Events with inquiry forms
4. **Bouquets & Products**: Gallery of flower arrangements
5. **Gallery**: Filterable portfolio of all work (weddings, baptisms, events, bouquets)
6. **Contact**: Multi-channel contact options, contact form, Google Maps integration

### Key Features
- Contact forms integrated with Supabase database
- Service inquiry forms for weddings, baptisms, and events
- Gallery management system
- Testimonials display
- Floating call button on mobile
- Smooth page transitions
- Professional design with rose/pink color scheme

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## Database Structure

### Tables
1. **gallery_items**: Store portfolio images with bilingual titles/descriptions
2. **testimonials**: Customer reviews with bilingual text
3. **contact_submissions**: Contact form submissions
4. **service_inquiries**: Detailed service requests (weddings, baptisms, events)

## Managing Content

### Adding Gallery Items
To add images to the gallery, insert data into the `gallery_items` table:

```sql
INSERT INTO gallery_items (
  title_el,
  title_en,
  description_el,
  description_en,
  image_url,
  category,
  featured,
  display_order
) VALUES (
  'Όμορφο Νυφικό Μπουκέτο',
  'Beautiful Bridal Bouquet',
  'Ρομαντικό μπουκέτο με τριαντάφυλλα',
  'Romantic bouquet with roses',
  'https://images.pexels.com/photos/...',
  'weddings',
  true,
  1
);
```

**Categories**: `weddings`, `baptisms`, `events`, `bouquets`

### Adding Testimonials
Insert customer reviews:

```sql
INSERT INTO testimonials (
  name,
  text_el,
  text_en,
  rating,
  is_active
) VALUES (
  'Μαρία Παπαδοπούλου',
  'Η Anna δημιούργησε τον πιο όμορφο γάμο! Υπέροχη δουλειά!',
  'Anna created the most beautiful wedding! Amazing work!',
  5,
  true
);
```

### Viewing Submissions
Check contact form submissions:

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;
```

Check service inquiries:

```sql
SELECT * FROM service_inquiries ORDER BY created_at DESC;
```

## Contact Information

All contact details are displayed throughout the site:
- **Phone**: +30 697 043 1472 (clickable on mobile)
- **Email**: annantakaki9@gmail.com
- **Messenger**: Facebook Messenger link
- **Address**: Ηγουμένου Γαβριήλ 38, Ρέθυμνο, Κρήτη
- **Google Maps**: Embedded map on contact page

## Color Scheme

- **Primary**: Rose/Pink tones (#e11d48, #f43f5e)
- **Accents**: Soft greens, lavenders
- **Neutrals**: Grays and whites
- **Background**: White with soft rose/pink gradients for sections

## SEO Keywords

Greek: ανθοπωλείο Ρέθυμνο, διακόσμηση γάμου, βάπτιση, μπουκέτα
English: flower shop Rethymno, wedding decoration Crete, bouquets

## Development

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

The `.env` file contains Supabase connection details:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Future Enhancements

The architecture supports easy addition of:
- Online ordering system
- Bouquet builder tool
- E-commerce functionality
- Blog section
- Customer accounts
- Advanced filtering and search

## Support

For technical support or questions about managing the website, refer to the Supabase dashboard for database management and form submissions.

---

Built with care for Rose Flower Shop, Rethymno, Crete 🌹
